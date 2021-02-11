import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../redux/sagas/rootSaga';

const saga = createSagaMiddleware();

const configureStoreProd = (initialState) => {
  const middlewares = [saga];

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};

const configureStoreDev = (initialState) => {
  const middlewares = [saga];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const devStore = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;

      devStore.replaceReducer(nextReducer);
    });
  }

  return devStore;
};

const configureStore =
  process.env.NODE_ENV === 'production'
    ? configureStoreProd
    : configureStoreDev;

const store = configureStore();

saga.run(rootSaga);

export default store;
