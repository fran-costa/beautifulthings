import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SignUpScreen from './';

const signUpScreen = <SignUpScreen onSignIn={action('Sign in clicked')} />

const stories = storiesOf('SignUpScreen', module);
stories.add('SignUpScreen', () => signUpScreen);
