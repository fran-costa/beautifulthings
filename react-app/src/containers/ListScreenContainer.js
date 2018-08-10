import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import api from 'api';
import { editEntry } from 'actions/entries';

import { getCurrentDateString } from 'utils/date';
import { showLoadingModal, hideLoadingModal } from 'utils/spinner';

import ListScreen from 'components/ListScreen';

const ListScreenContainer = ({ entries, onAdd, onEdit, aux }) => {
  async function _requestEntries() {
    try {
      showLoadingModal('Retrieving entries...');
      const currentDateString = getCurrentDateString();
      const entries = await api.getEntries('2018-01-01', currentDateString);
      if (entries.length) entries.forEach(entry => aux(entry.date, entry.text));
        //console.log(entries)/** TODO: Update entries */
    } catch(error) {
      /** TODO: Show an alert */
    } finally {
      hideLoadingModal();
    }
  }

  _requestEntries();

  return ListScreen({
    entries,
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
  entries: PropTypes.array.isRequired,

  /**
   * The function to call when add button is tapped
   */
  onAdd: PropTypes.func.isRequired,

  /**
   * The function to call when edit button is tapped over an entry
   */
  onEdit: PropTypes.func.isRequired,

  aux: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  aux: (date, text) => dispatch(editEntry(date, text)),
  //onRemove: date => dispatch(removeEntry(date)),
  //onDailyChanged: daily => dispatch(setNotifications(daily)),
}, dispatch);

const mapStateToProps = state => ({
  entries: state.entries,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListScreenContainer);
