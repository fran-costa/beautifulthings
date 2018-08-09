import PropTypes from 'prop-types';

import EditScreen from 'components/EditScreen';

const EditScreenContainer = ({ onBack, onSave }) => {
  return EditScreen({
    date: '2018-01-01',
    text: 'Example text',
    onBack,
    onSave,
  });
}

EditScreenContainer.propTypes = {
  /**
   * The function to call when back button is tapped
   */
  onBack: PropTypes.func.isRequired,

  /**
   * The function to call when save button is tapped
   */
  onSave: PropTypes.func.isRequired,
}

export default EditScreenContainer;
