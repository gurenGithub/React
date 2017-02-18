
import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.css'
import './css/main.css'
import './css/custom.css'
import './components/ui/css/ui.css'
const store = configureStore()
render(
  <Root store={store} />,
  document.getElementById('root')
)



