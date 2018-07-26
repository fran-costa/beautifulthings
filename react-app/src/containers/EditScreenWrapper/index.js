import React from 'react';
import PropTypes from 'prop-types';

import { getCurrentDateString } from 'utils/date';

import Button from 'components/Button';
import ButtonsModal from 'components/ButtonsModal';
import EditScreen from 'containers/EditScreen';

export default class EditScreenWrapper extends React.PureComponent {
  static propTypes = {
    match: PropTypes.any.isRequired,
    onBack: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
  };

  state = {
    date: this.props.match.params.date || getCurrentDateString(),
    text: '',
    unsavedChangesModalVisible: false,
  };

  componentWillMount() {
    const dateToEdit = this.props.match.params.date;

    if (dateToEdit) { /* TODO: Show spinner, retrieve entry, update states and re-render */ }
  }

  _handleBack = (entryDate, entryText) => {
    const { date, text } = this.state;

    if (date !== entryDate || text !== entryText) this._showUnsavedChangesModal();
    else this.props.onBack();
  }

  _handleSave = (date, text) => { /* TODO: Show spinner, post entry, call this.props.onSave() */ }

  _showUnsavedChangesModal = () => this.setState({ unsavedChangesModalVisible: true });
  _hideUnsavedChangesModal = () => this.setState({ unsavedChangesModalVisible: false });

  _getUnsavedChangesModal() {
    const doNotLeaveButton = Button({
      children: "No",
      onClick: this._hideUnsavedChangesModal,
      small: true,
    });

    const leaveButton = Button({
      children: "Yes",
      onClick: this.props.onBack,
      small: true,
    });

    return ButtonsModal({
      visible: this.state.unsavedChangesModalVisible,
      message: "Do you want to discard changes?",
      primaryButton: doNotLeaveButton,
      secondaryButton: leaveButton,
    });
  }

  render() {
    const { date, text } = this.state;
    const unsavedChangesModal = this._getUnsavedChangesModal();

    return (
      <div>
        {unsavedChangesModal}
        <EditScreen
          date={date}
          text={text}
          onBack={this._handleBack}
          onSave={this._handleSave}
        />
      </div>
    );
  }
}
