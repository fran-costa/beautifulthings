import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import ButtonsModal from 'components/ButtonsModal';
import ListScreen from 'containers/ListScreen';

export default class ListScreenWrapper extends React.PureComponent {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
  }

  state = {
    entries: null,
    entryToDelete: null,
  };

  componentWillMount() { /* TODO: Request entries */ }

  _openSettingsModal = () => { /* TODO: Open settings modal */ }

  _setEntryToDelete = entryDate => this.setState({ entryToDelete: entryDate });
  _unsetEntryToDelete = () => this.setState({ entryToDelete: null });

  _removeEntry = () => { /* TODO: remove entry -the one indicated at state.entryToDelete- */ }

  _getDeleteModal() {
    const deleteButton = Button({
      children: "Yes",
      onClick: this._removeEntry,
      small: true,
    });

    const cancelButton = Button({
      children: "No",
      onClick: this._unsetEntryToDelete,
      small: true,
    });

    return ButtonsModal({
      visible: this.state.entryToDelete,
      message: "Are you sure you want to delete?",
      primaryButton: deleteButton,
      secondaryButton: cancelButton,
    });
  }

  _getListScreen() {
    const { onAdd, onEdit } = this.props;

    return ListScreen({
      entries: this.state.entries || [],
      onAdd: onAdd,
      onEdit: onEdit,
      onRemove: this._setEntryToDelete,
      onSettings: this._openSettingsModal,
    });
  }

  render() {
    const deleteModal = this._getDeleteModal();
    const listScreen = this._getListScreen();

    return (
      <div>
        {deleteModal}
        {listScreen}
      </div>
    );
  }
}
