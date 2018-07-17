import React from 'react';
import PropTypes from 'prop-types';

import BaseScreen from 'containers/BaseScreen';
import Button from 'components/Button';
import HeaderListScreen from 'components/HeaderListScreen';
import ListItem from 'components/ListItem';
import Welcome from 'components/Welcome';

import AddButton from './AddButton.svg';
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
    return HeaderListScreen({onSettings});
  }

  function _getContent() {
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
          onEdit={_handleEdit}
          onDelete={_handleDelete}
        />
      </div>
    ));

    return (
      <div className={styles.mainContainer}>
        {list}
      </div>
    );
  }

  function _getFooter() {
    const addButtonImage = (
      <img
        src={AddButton}
        alt=""
      />
    );

    const button = Button({
      onClick: onAdd,
      isSmall: true,
      children: addButtonImage,
    });

    return (
      <div className={styles.footer}>
        {button}
      </div>
    );
  }

  const header = _getHeader();
  const content = _getContent();
  const footer = _getFooter();

  return BaseScreen({
    header,
    main: content,
    footer,
  });
}

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
}

export default ListScreen;
