import React,{Component} from 'react'
import AccountLogin from './../common/AccountLogin.jsx'
import { Router, Route, browserHistory,Link  } from 'react-router';
export default class Login extends Component{


submitHandler(e)
{
    browserHistory.push('/Home')
}
      
      render(){
         return  (
       <div>
    	<div className='logo'>	
    	</div>
    	<div>
    		 <h3 style={{textAlign:'center'}}>成都联通协作平台客户端</h3>
    		 <AccountLogin onSubmit={this.submitHandler.bind(this)} /> 
    	</div> 
    	  <div className='navbar-fixed-bottom center fonter' > copyright@(2009-2016) www.smallnet.cn</div>
       </div>
         	)

      }

 }