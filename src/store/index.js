import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const configureStoreProd = (initialState) => {
  const middlewares = [];

  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
};

const configureStoreDev = (initialState) => {
  const middlewares = [];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const devStore = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;

      devStore.replaceReducer(nextReducer);
    });
  }

  return devStore;
};

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

const store = configureStore();

export default store;
