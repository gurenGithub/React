import React,{Component} from 'react'
import Title from './../ui/title.jsx'
import NavButton from './../ui/NavButton.jsx'
import Grid from './../ui/Grid.jsx'
import AccountInfo from './../common/AccountInfo.jsx'

import Panel from './../ui/panel.jsx'
 export default class Home extends Component{



      render(){
var menus=[
   {title:'我的代办', src:'./app/css/customImage/icon_hzbb.png',href:'todo'},
   {title:'已办工单', src:'./app/css/customImage/icon_lxsj.png',href:'done'},
   {title:'离线数据', src:'./app/css/customImage/icon_wdgd.png',href:'todo'},
   {title:'站点查询', src:'./app/css/customImage/icon_wljc.png',href:'stationList'},
   {title:'报表', src:'./app/css/customImage/icon_xpxc.png',href:'report'},


]

    return  (
       <div >
    	<div id='div_title'>
    	   <Title title="主页" isFixedTop={false} ><NavButton/></Title>
    	</div>
    	<div >
      <Panel>
         <AccountInfo userName="渣渣" roleName="败类" img="./app/css/customImage/user.png"></AccountInfo>
      </Panel>
    	 
          <Panel>
    		<Grid menus={menus} />
    		</Panel>
    	</div> 
      </div>
         	)

      }

 }