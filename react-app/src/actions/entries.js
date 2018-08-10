const editEntry = (date, text) => ({
  type: 'EDIT_ENTRY',
  date,
  text,
});

const removeEntry = date => ({
  type: 'REMOVE_ENTRY',
  date,
});

export { editEntry, removeEntry }
