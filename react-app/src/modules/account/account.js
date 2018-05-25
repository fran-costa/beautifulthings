import scrypt from 'scrypt-async';
import nacl from 'tweetnacl';
import sha256 from 'fast-sha256';
import blake from 'blakejs';

nacl.util = require('tweetnacl-util');

let _username, _pk, _sk, _tz, _offset;

export function clearAccount() {
  _username = _pk = _sk = _tz = _offset = undefined;
}

export function _setKeyPair(pk, sk) {
  _pk = nacl.util.decodeBase64(pk);
  _sk = nacl.util.decodeBase64(sk);
}

function _generateNonce(publicKeyA, publicKeyB) {
  let state = blake.blake2bInit(nacl.box.nonceLength, null);
  blake.blake2bUpdate(state, publicKeyA);
  blake.blake2bUpdate(state, publicKeyB);
  return blake.blake2bFinal(state);
}

export function constructor(username, password) {
  return new Promise(resolve => {
    const hashedPassword = sha256(nacl.util.decodeUTF8(password));
    const salt = sha256(nacl.util.decodeUTF8(username));
    const options = {
      N: 1 << 20,
      r: 8,
      p: 1,
      dkLen: 32,
      encoding: 'binary'
    };

    const callback = (derivedKey) => {
      const keyPair = nacl.box.keyPair.fromSecretKey(derivedKey);
      _username = username;
      _pk = keyPair.publicKey;
      _sk = keyPair.secretKey;
      resolve(null);
    };

    scrypt(hashedPassword, salt, options, callback);
  });
}

export function bytes() {
  return JSON.stringify({
    username: _username,
    pk: _pk,
    tz: _tz,
    offset: _offset
  });
}

export function encrypt(plainText) {
  const messageToEncrypt = nacl.util.decodeUTF8(plainText);
  const ephemeralKeyPair = nacl.box.keyPair();
  const nonce = _generateNonce(ephemeralKeyPair.publicKey, _pk);
  const cipherText = nacl.box(messageToEncrypt, nonce, _pk, ephemeralKeyPair.secretKey);

  let output = new Uint8Array(nacl.box.publicKeyLength + cipherText.length);
  output.set(ephemeralKeyPair.publicKey);
  output.set(cipherText, nacl.box.publicKeyLength);

  return nacl.util.encodeBase64(output);
}

export function decrypt(cipherText) {
  const input = nacl.util.decodeBase64(cipherText);
  const originalEphemeralPublicKey = input.subarray(0, nacl.box.publicKeyLength);

  const nonce = _generateNonce(originalEphemeralPublicKey, _pk);
  const encryptedMessage = input.subarray(nacl.box.publicKeyLength);
  const decryptedMessage = nacl.box.open(encryptedMessage, nonce, originalEphemeralPublicKey, _sk);

  return nacl.util.encodeUTF8(decryptedMessage);
}

export function getUsername() {
  return _username;
}

export function getPublicKey() {
  return _pk;
}

export function getSecretKey() {
  return _sk;
}

export function getTimezone() {
  return _tz;
}

export function setOffset(offset) {
  // TODO: Note that tz could be HH:00, HH:30 or even HH:45. setOffset have to set _offset and _tz.
}

export function getOffset() {
  return _offset;
}
