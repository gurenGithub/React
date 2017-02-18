import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import AccountLogin from './../../components/common/AccountLogin.js'
import { Router, Route, browserHistory,Link  } from 'react-router';
import {login} from '../../actions/UserAction.js'
import { connect } from 'react-redux'
import  Win from '../../components/ui/Win.js'

export default class Login extends Component{


  submitHandler(state) 
  {


       Win.loadding('提交中...');
    this.props.login(state.userName,state.password,function(data)
    {
       Win.closeLoadding();
       this.props.history.push('/home/' + data.LoginID);
     
    }.bind(this))
    

  }
      
      render(){
         return  (
         	<div>
    	     <div className='logo'>	</div>
    	     <div>
    		     <h3 style={{textAlign:'center'}}>成都联通协作平台客户端</h3>
    		     <AccountLogin onSubmit={this.submitHandler.bind(this)} /> 
    	      </div> 
    	      <div className='navbar-fixed-bottom center fonter' > copyright@(2009-2016) www.smallnet.cn</div>
           </div>
         	)
      }
 }

function mapStateToProps(state) {
  return {
    user:state.userReducer.user
    }
}
export default connect(mapStateToProps, {
   login
})(Login)