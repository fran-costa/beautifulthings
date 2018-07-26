import React from 'react';
import PropTypes from 'prop-types';

import ActionIcon from 'components/ActionIcon';
import BaseScreen from 'containers/BaseScreen';
import Button from 'components/Button';
import Header from 'components/Header';
import ListItem from 'components/ListItem';
import Welcome from 'components/Welcome';

import styles from './index.module.scss';

const ListScreen = props => {
  const {
    entries,
    onAdd,
    onEdit,
    onRemove,
    onSettings,
  } = props;

  const _handleEdit = entryDate => onEdit(entryDate);
  const _handleDelete = entryDate => onRemove(entryDate);

  function _getHeader() {
    const settingsIcon = ActionIcon({
      icon: ActionIcon.SETTINGS,
      onClick: onSettings,
    });

    const header = Header({ left: settingsIcon });

    return (
      <div className={styles.headerBackground}>
        {header}
      </div>
    );
  }

  function _getList() {
    const list = entries.map((entry, index) => <ListItem
      key={index}
      date={entry.date}
      text={entry.text}
      onEdit={_handleEdit}
      onDelete={_handleDelete}
    />);

    return (
      <div className={styles.listContainer}>
        {list}
      </div>
    );
  }

  function _getFooter() {
    const buttonImage = <div className={styles.buttonImage} />;

    const addButton = Button({
      children: buttonImage,
      onClick: onAdd,
      small: true,
    });

    return (
      <div className={styles.footerContainer}>
        {addButton}
      </div>
    );
  }

  const header = _getHeader();
  const main = entries.length ? _getList() : Welcome();
  const footer = _getFooter();

  return BaseScreen({
    header,
    main,
    footer,
  });

};

ListScreen.propTypes = {
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
};

export default ListScreen;
