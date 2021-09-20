import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import userReducer from './reducers/user';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
    }),
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
};

export default configureStore;
