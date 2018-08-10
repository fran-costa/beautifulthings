import { createEntry } from 'utils/entry';

function _editEntry(state, date, text) {
  const nextState = Array.from(state);

  const entryIndex = nextState.findIndex(entry => entry.date === date);
  const newEntry = createEntry(date, text);

  if (entryIndex !== -1) {
    nextState[entryIndex] = newEntry;
  } else {
    nextState.push(newEntry);
    nextState.sort((entryA, entryB) => {
      const dateA = new Date(entryA.date);
      const dateB = new Date(entryB.date);

      return dateA > dateB;
    });
  }

  return nextState;
}

/*function _removeEntry(state, date) {
  return state.filter(entry => entry.date !== date);
}*/

function entries(state = [], action) {
  switch (action.type) {
    case 'EDIT_ENTRY':
      return _editEntry(state, action.date, action.text);
    case 'REMOVE_ENTRY':
      return state;
      //return _removeEntry(state, action.date);
    default:
      return state;
  }
}

export default entries;
