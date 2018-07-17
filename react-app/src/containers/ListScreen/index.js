import React from 'react';
import PropTypes from 'prop-types';

import BaseScreen from 'containers/BaseScreen';
import Button from 'components/Button';
import HeaderListScreen from 'components/HeaderListScreen';
import ListItem from 'components/ListItem';
import Welcome from 'components/Welcome';

import AddButton from './AddButton.svg';
import styles from './index.module.scss';

export default class ListScreen extends React.PureComponent {
  static propTypes = {
    /**
     * The set of entries to draw in the list
     */
    entries: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,

    /**
     * The function to call when add button is tapped
     */
    onAdd: PropTypes.func.isRequired,

    /**
     * The function to call when edit button is tapped over an entry
     */
    onEdit: PropTypes.func.isRequired,

    /**
     * The function to call when remove button is tapped over an entry
     */
    onRemove: PropTypes.func.isRequired,

    /**
     * The function to call when setting icon is tapped
     */
    onSettings: PropTypes.func.isRequired,
  }

  _handleEdit = entryDate => this.props.onEdit(entryDate);
  _handleDelete = entryDate => this.props.onRemove(entryDate);

  _getHeader() {
    return HeaderListScreen({ onSettings: this.props.onSettings });
  }

  _getContent() {
    const { entries } = this.props;

    if (!entries.length) return (
      <div className={styles.mainContainer}>
        {Welcome()}
      </div>
    );

    const list = entries.map((entry, index) => (
      <div
        className={styles.itemsContainer}
        key={index}
      >
        <ListItem
          date={entry.date}
          text={entry.text}
          onEdit={this._handleEdit}
          onDelete={this._handleDelete}
        />
      </div>
    ));

    return (
      <div className={styles.mainContainer}>
        {list}
      </div>
    );
  }

  _getFooter() {
    const addButtonImage = (
      <img
        src={AddButton}
        alt=""
      />
    );

    const button = Button({
      onClick: this.props.onAdd,
      isSmall: true,
      children: addButtonImage,
    });

    return (
      <div className={styles.footer}>
        {button}
      </div>
    );
  }

  render() {
    const header = this._getHeader();
    const content = this._getContent();
    const footer = this._getFooter();

    return BaseScreen({
      header: header,
      main: content,
      footer: footer,
    });
  }
}
