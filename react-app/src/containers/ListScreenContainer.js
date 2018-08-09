import PropTypes from 'prop-types';

import ListScreen from 'components/ListScreen';

const ListScreenContainer = ({ onAdd, onEdit }) => {
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
