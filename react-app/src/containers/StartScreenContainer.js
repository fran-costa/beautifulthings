import React from 'react';
import PropTypes from 'prop-types';

import StartScreen from 'components/StartScreen';

const StartScreenContainer = ({ onSignUp }) => {
  return <StartScreen
    onSignUp={onSignUp}
  />;
}

StartScreenContainer.propTypes = {
  /**
   * The function to call when sign up button is clicked
   */
  onSignUp: PropTypes.func.isRequired,
}

export default StartScreenContainer;
