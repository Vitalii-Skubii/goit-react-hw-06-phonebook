// import actionTypes from './contacts-types';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
const contactsAdd = createAction('contacts/add', (name, number) => ({
  payload: { id: uuid(), name, number },
}));
// const contactsAdd = (name, number) => ({
//   type: actionTypes.CONTACTS_ADD,
//   payload: { id: uuid(), name, number },
// });
const contactRemove = createAction('contacts/remove');
// const contactRemove = id => ({
//   type: actionTypes.CONTACTS_REMOVE,
//   payload: id,
// });
const changeFilter = createAction('contacts/filter');
// const changeFilter = value => ({
//   type: actionTypes.CONTACTS_FILTER,
//   payload: value,
// });
export default { contactsAdd, contactRemove, changeFilter };
