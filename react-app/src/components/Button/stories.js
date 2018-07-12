import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import Button from './';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('Text button', () => (
  <Button
    disabled={boolean('Disabled', false)}
    onClick={action('Button clicked')}
  >
    Text
  </Button>
));
