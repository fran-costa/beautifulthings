import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import ButtonsModal from 'components/ButtonsModal';
import ListScreen from 'containers/ListScreen';
import SettingsModal from 'components/SettingsModal';

export default class ListScreenWrapper extends React.PureComponent {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
  }

  state = {
    entries: null,
    entryToDelete: null,
    isSettingsModalVisible: false,
  };

  componentWillMount() { /* TODO: Request entries */ }

  _openSettingsModal = () => this.setState({ isSettingsModalVisible: true });

  _closeSettingsModal = isDaily => {
    // TODO: Update accounts notifications configuration if needed
    this.setState({ isSettingsModalVisible: false });
  }

  _handleSignOut = () => { /* TODO */ }

  _setEntryToDelete = entryDate => this.setState({ entryToDelete: entryDate });
  _unsetEntryToDelete = () => this.setState({ entryToDelete: null });

  _removeEntry = () => { /* TODO: remove entry -the one indicated at state.entryToDelete- */ }

  _getSettingsModal() {
    // TODO: Get username and current notifications configuration of the account

    return <SettingsModal
      visible={this.state.isSettingsModalVisible}
      username="Username"
      daily={true}
      onHide={this._closeSettingsModal}
      onSignOut={this._handleSignOut}
    />
  }

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
    const settingsModal = this._getSettingsModal();
    const deleteModal = this._getDeleteModal();
    const listScreen = this._getListScreen();

    return (
      <div>
        {settingsModal}
        {deleteModal}
        {listScreen}
      </div>
    );
  }
}
