import {hot} from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './App';

import store from './store';

import './index.css';

const AppWithStore = () => (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

const Hot = hot(AppWithStore);

const Root = process.env.NODE_ENV === 'production' ? AppWithStore : Hot;

ReactDOM.render(<Root />, document.getElementById('root'));
