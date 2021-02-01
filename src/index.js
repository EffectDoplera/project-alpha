import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import { StateContext } from './redux/StateContext'
import state from './redux/state'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <StateContext.Provider value={state}>
      <App />
    </StateContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
