import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import StartScreen from './';

const startScreen = <StartScreen onSignUp={action('Sign up clicked')} />

const stories = storiesOf('StartScreen', module);
stories.add('StartScreen', () => startScreen);
