// store.js
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  role: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ROLE':
      return { ...state, role: action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
});

export default store;
