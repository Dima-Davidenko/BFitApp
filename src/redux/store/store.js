const { combineReducers, configureStore } = require('@reduxjs/toolkit');

const rootReducer = combineReducers({
  auth: (state = {}, action) => {
    return state;
  },
});

export const store = configureStore({ reducer: rootReducer });
