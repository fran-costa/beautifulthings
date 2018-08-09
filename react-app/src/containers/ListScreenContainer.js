import PropTypes from 'prop-types';

import api from 'api';

import { getCurrentDateString } from 'utils/date';
import { showLoadingModal, hideLoadingModal } from 'utils/spinner';

import ListScreen from 'components/ListScreen';

const ListScreenContainer = ({ onAdd, onEdit }) => {
  async function _requestEntries() {
    try {
      showLoadingModal('Retrieving entries...');
      const currentDateString = getCurrentDateString();
      const entries = await api.getEntries('2018-01-01', currentDateString);
      if (entries.length) { /** TODO: Update entries */ }
    } catch(error) {
      /** TODO: Show an alert */
    } finally {
      hideLoadingModal();
    }
  }

  _requestEntries();

  return ListScreen({
    entries: [],
    username: 'Username',
    daily: true,
    onAdd,
    onEdit,
    onRemove: () => {},
    scheduleNotifications: () => {},
    onSignOut: () => {},
  });
}

ListScreenContainer.propTypes = {
  /**
   * The function to call when add button is tapped
   */
  onAdd: PropTypes.func.isRequired,

  /**
   * The function to call when edit button is tapped over an entry
   */
  onEdit: PropTypes.func.isRequired,
};

export default ListScreenContainer;
