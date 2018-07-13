import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default class TextArea extends React.PureComponent {
  static MAX_LENGTH = 240;

  static propTypes = {
    /**
     * The initial text that the element will have.
     */
    text: PropTypes.string.isRequired,
  };

  state = { currentText: this.props.text }

  _setTextAreaRef = element => this._textArea = element;

  _getLabel() {
    return (
      <label>
        What?
      </label>
    );
  }

  _getTextArea() {
    return (
      <textarea
        className={styles.textArea}
        value={this.state.currentText}
        onChange={this._handleChange}
        ref={this._setTextAreaRef}
      />
    );
  }

  _getCharCounter() {
    const currentCount = this.state.currentText.length;

    return (
      <div>
        {currentCount}/{TextArea.MAX_LENGTH}
      </div>
    );
  }

  _handleChange = event => {
    const newText = event.target.value;

    if (newText.length <= TextArea.MAX_LENGTH) this.setState({ currentText: newText });
  }

  focus = () => this._textArea.focus();

  getText() {
    return this.state.currentText;
  }

  render() {
    const label = this._getLabel();
    const textArea = this._getTextArea();
    const charCounter = this._getCharCounter();

    return (
      <div>
        <div className={styles.labelContainer}>
          {label}
        </div>
        <div className={styles.textAreaContainer}>
          {textArea}
        </div>
        <div className={styles.charCounterContainer}>
          {charCounter}
        </div>
      </div>
    );
  }
}
