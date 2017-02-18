import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import Login from './home/LoginPage.js'
import {login} from '../actions/UserAction.js'

import { Router, Route, browserHistory,Link  } from 'react-router';


export default class App extends Component {
  constructor(props) {
    super(props)
    }

  render()
   { 
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  
  children:React.PropTypes.node
}

