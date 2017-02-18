import React,{Component} from 'react'
import Title from './../../components/ui/title'
import NavButton from './../../components/ui/NavButton'
import Grid from './../../components/ui/Grid'
import AccountInfo from './../../components/common/AccountInfo'
import Panel from './../../components/ui/panel'
import Image from  './../../css/Image.js'
import {userInfo} from '../../actions/UserAction.js'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
 class HomePage extends Component{


constructor(props){
  super(props);
 
}

componentWillMount() {
     this.props.userInfo();

  }

componentWillReceiveProps(nextProps) {
    if (nextProps.user.UserName !== this.props.user.UserName) {
      this.props.userInfo();
    }
  }

 render(){
 var menus=[
   {title:'我的代办', src:Image.icon_lxsj,href:'/todo'},
   {title:'已办工单', src:Image.icon_hzbb,href:'/done'},
   {title:'离线数据', src:Image.icon_wdgd,href:'/todo'},
   {title:'站点查询', src:Image.icon_wljc,href:'/station'},
   {title:'报表', src:Image.icon_xpxc,href:'/report'},


]




   return  (
       <div >
    	<div id='div_title'>
    	   <Title title="主页" isFixedTop={false} ><NavButton/></Title>
    	</div>
    	<div >
      <Panel>
         <AccountInfo userName={this.props.user.UserName} roleName={this.props.user.RoleNames} img={Image.user}></AccountInfo>
      </Panel>
    	 
          <Panel>
    		<Grid menus={menus} />
    		</Panel>
    	</div> 
      </div>
         	)

      }

 }

 HomePage.defaultProps=
 {
   user:{},
   userInfo:null
 }
 HomePage.propTypes={
   userInfo:React.PropTypes.func
 }

 function mapStateToProps(state) {

  
  return {
    user:state.userReducer.user
    }
}

export default connect(mapStateToProps,
 {
  pushState,userInfo
  })(HomePage)
