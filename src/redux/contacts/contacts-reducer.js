import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import actionTypes from './contacts-types';
import contactsActions from './contacts-actions';
const items = createReducer([], {
  [contactsActions.contactsAdd]: (state, { payload }) => [...state, payload],
  [contactsActions.contactRemove]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});
// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.CONTACTS_ADD:
//       return [...state, payload];

//     case actionTypes.CONTACTS_REMOVE:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };
const filter = createReducer('', {
  [contactsActions.changeFilter]: (state, { payload }) => payload,
});
// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.CONTACTS_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
export default combineReducers({ items, filter });

// filter: filterReducer,
// items: itemsReducer,
