import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, selectV2 } from '@storybook/addon-knobs/react';

import ActionIcon from './';

const stories = storiesOf('ActionIcon', module);
stories.addDecorator(withKnobs);

const availableIcons = {
  back: ActionIcon.BACK,
  apply: ActionIcon.APPLY,
}

stories.add('ActionIcon', () => (
  <ActionIcon
    icon={selectV2('Icon', availableIcons, availableIcons.back)}
    onClick={action('ActionIcon clicked')}
  >
  </ActionIcon>
));
