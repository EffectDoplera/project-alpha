import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';

import store from './store';

import 'antd/dist/antd.css';
import './index.css';

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const Hot = hot(AppWithStore);

const Root = process.env.NODE_ENV === 'production' ? AppWithStore : Hot;

ReactDOM.render(<Root />, document.getElementById('root'));
