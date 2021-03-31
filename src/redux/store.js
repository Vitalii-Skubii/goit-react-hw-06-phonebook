import { createStore } from 'redux';
const initialState = { nameValue: '', numberValue: '' };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'changeForm/handler':
          return { nameValue: state '1'};
      default: return state;
  }
  return state;
};
const store = createStore(reducer);
export default store;
