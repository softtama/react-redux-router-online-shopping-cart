// Coded from:
// React Example - Create an Online Store using React, Redux React Router v4 [Part 1] - Episode #16
// https://youtu.be/T_HtlP80UYc

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import store from './config/store'

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))