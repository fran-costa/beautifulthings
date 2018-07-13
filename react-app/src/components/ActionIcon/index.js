import React from 'react';
import PropTypes from 'prop-types';

import Apply from './Apply.svg';
import Back from './Back.svg';

export default class ActionIcon extends React.PureComponent {
  static BACK = 'back';
  static APPLY = 'apply';

  static propTypes = {
    /**
     * The icon that this element will show.
     */
    icon: PropTypes.oneOf([
      ActionIcon.BACK,
      ActionIcon.APPLY
    ]).isRequired,

    /**
     * The function to call when this element is clicked.
     */
    onClick: PropTypes.func.isRequired,
  };

  _handleClick = () => this.props.onClick(this.props.icon);

  _getIcon = () => {
    switch (this.props.icon) {
      case ActionIcon.BACK:
        return Back;
      case ActionIcon.APPLY:
        return Apply;
      default:
        return null;
    }
  }

  render() {
    const icon = this._getIcon();

    return (
      <img
        src={icon}
        alt=""
      />
    );
  }
}
