// The base of the following code was generated by ChatGPT and was edited by me according to the requirements and my preferences

export const addItem = newItem => {
  return {
    type: 'ADD_ITEM',
    payload: newItem
  };
};

export const removeItem = item => {
  return {
    type: 'REMOVE_ITEM',
    payload: item
  };
};

export const selectItem = item => {
  return {
    type: 'SELECT_ITEM',
    payload: item
  };
};

export const deleteAllItems = () => {
  return {
    type: 'DELETE_ALL_ITEMS'
  };
};