import PropTypes from 'prop-types';

import api from 'api';

import { showLoadingModal, hideLoadingModal } from 'utils/spinner';

import EditScreen from 'components/EditScreen';

const EditScreenContainer = ({ date, onBack, onSave }) => {
  async function _requestEntry() {
    try {
      showLoadingModal('Retrieving entry');
      const entries = await api.getEntries(date, date);
      if (entries.length === 1) { /** TODO: Update entry */ }
    } catch(error) {
      /** TODO: Show an alert */
    } finally {
      hideLoadingModal();
    }
  }

  if (date) _requestEntry();

  return EditScreen({
    date: '2018-01-01',
    text: 'Example text',
    onBack,
    onSave,
  });
}

EditScreenContainer.propTypes = {
  /**
   * The date of the entry to edit
   */
  date: PropTypes.string,

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
