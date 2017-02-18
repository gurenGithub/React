import React from 'react'
import { Route,IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/home/HomePage.js'
import Login from './containers/home/LoginPage.js'
import Todo from './containers/home/TodoPage.js'
import Done from './containers/home/DonePage.js'
import Accept from './containers/workflow/AcceptPage.js'
import Construction from './containers/workflow/ConstructionPage.js'
import Station from './containers/station/StationListPage.js'
import StationInfo from './containers/station/StationInfoPage.js'
import Report from './containers/home/ReportPage.js'
import AssessmentGroup from './containers/Report/AssessmentGroupPage.js'
import AnalysisGroup from './containers/Report/AnalysisGroupPage.js'
import AreaGroup from './containers/Report/AreaGroupPage.js'
import DepartmentGroup from './containers/Report/DepartmentGroupPage.js'
import ConstructorGroup from './containers/Report/ConstructorGroupPage.js'
import ManagerGroup from './containers/Report/ManagerGroupPage.js'
import List from './containers/Common/ListPage.js'
import View from './containers/Common/ViewPage.js'


import AcceptGroup from './containers/AssessmentReport/AcceptGroupPage.js'
import ConstractGroup from './containers/AssessmentReport/ConstractGroupPage.js'
import AsConstructorGroup from './containers/AssessmentReport/ConstructorGroupPage.js'
import SFReportGroup from './containers/AssessmentReport/SFReportGroupPage.js'
import SubmitGroup from './containers/AssessmentReport/SubmitGroupPage.js'
import ZGGroup from './containers/AssessmentReport/ZGGroupPage.js'



 function getList() {

   var lists = document.querySelectorAll('.list')
   var scrollTops = [];
   for (var i = 0; i < lists.length; i++) {
     var obj = lists[i];
     scrollTops.push(obj.scrollTop);
   }
   document.body.setAttribute(this.path, scrollTops.join(','))
 }

 function setList() {

   var scrollTops = document.body.getAttribute(this.path);
   if (scrollTops) {
     scrollTops = scrollTops.split(',');

     var lists = document.querySelectorAll('.list')

     for (var i = 0; i < lists.length; i++) {
       var obj = lists[i];
       obj.scrollTop = scrollTops[i];
     }
   }
 }


function onEnter(nextState,replaceState){


   
   this.operator={getList:getList.bind(this),setList:setList.bind(this)}
}
function onLeave(state){
  
  
  this.operator.getList();
}

export default (
    <Route path="/" component={App}>
      <Route path="home/:userName" component={Home}></Route>
       <Route path="login" component={Login}></Route>
       <Route path="todo" component={Todo} onEnter={onEnter} onLeave={onLeave}></Route>
        <Route path="done" component={Done}></Route>
        <Route path="report" component={Report}></Route>
        <Route path="assessmentGroup" component={AssessmentGroup}></Route>
        <Route path="analysisGroup" component={AnalysisGroup}></Route>
        <Route path="areaGroup" component={AreaGroup}></Route>
        <Route path="constructorGroup" component={ConstructorGroup}></Route>
        <Route path="departmentGroup" component={DepartmentGroup}></Route>
        <Route path="managerGroup" component={ManagerGroup}></Route>
        <Route path="List/:module/:title" component={List}> </Route>
        <Route path="View/:id/:title" component={View}></Route>

       <Route path="AcceptGroup" component={AcceptGroup}></Route>
        <Route path="ConstractGroup" component={ConstractGroup}></Route>
        <Route path="AsConstructorGroup" component={ConstructorGroup}></Route>
        <Route path="SFReportGroup" component={SFReportGroup}></Route>
        <Route path="SubmitGroup" component={SubmitGroup}> </Route>
        <Route path="ZGGroup" component={ZGGroup}></Route>

        <Route path="station" component={Station}> </Route>
        <Route path="station/:stationId" component={StationInfo}></Route>
       <Route path="accept/:workflowid" component={Accept}></Route>
       <Route path="construction/:workflowid" component={Construction}></Route>
      <IndexRoute component={Login} />
   </Route>
)
