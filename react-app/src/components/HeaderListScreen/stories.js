import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import HeaderListScreen from './';

const stories = storiesOf('HeaderListScreen', module);

stories.add('HeaderListScreen', () => (
  <HeaderListScreen onSettings={action('Settings pressed')} />
));
