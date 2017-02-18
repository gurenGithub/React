import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import AccountLogin from './../../components/common/AccountLogin.js'
import { Router, Route, browserHistory,Link  } from 'react-router';
import {login} from '../../actions/UserAction.js'
import { connect } from 'react-redux'
import  Win from '../../components/ui/Win.js'
import Back from './../../components/ui/Back.js'
import NavButton from './../../components/ui/NavButton'
import {getItem,submitAccept} from '../../actions/TodoAction.js'
import { pushState } from 'redux-router'
import Panel from './../../components/ui/panel'
import SelectUserList from './../../components/common/SelectApprovalUser'


 class AcceptPage extends Component{


  
  
  constructor(props){
    super(props);
    this.state={entity:{},selectedUsers:[],isPass:true}
  }
      componentWillMount()
      {
        var workflowId=this.props.params.workflowid;
        this.props.getItem(workflowId);
      }


      onSelectUser(selectedUsers,isReject){
        this.state.selectedUsers=selectedUsers;

        this.state.isPass=!isReject;
      }

  onSubmitHanler() {
    var approvalUsers = [];
    for (var i = 0; i < this.state.selectedUsers.length; i++) {
      var _selectItem = this.state.selectedUsers[i];
      approvalUsers.push(_selectItem.ApprovalUserID)
    }
    var entity = {
      WorkflowID: this.props.params.workflowid,
      ApprovlUserID: approvalUsers.join(',')
    }
     Win.ladding();

    this.props.submitAccept(entity.WorkflowID, entity.ApprovlUserID,this.state.isPass,
      function(data) {
        Win.closeLoadding()
        Win.alert('提交成功', function()
        {
        
        this.props.history.push('/todo')
         //  window.opener.history.reload();
       // window.close();
        }.bind(this))

      }.bind(this),
      function() {
        
      }
    )

  }


  
      render(){
var workflowId=this.props.params.workflowid;

         var menus =[{title: '问题发起',href:('/problem/'+workflowId)},{title:'申请延时',href:('delay/'+workflowId)}]
         return  (
          <div>
          <Back title="待办处理" isFixedTop={false} onBack={()=>{

             this.props.history.push('/todo')
       }.bind(this)}><NavButton menus={menus}/></Back>

           <Panel>
          <div className='center'>
          <h4>{this.props.title}</h4>
          <p>工单号:{this.props.sheetno}</p>
          <p>站点名称:{this.props.stationName}</p>
          <p>周期:{this.props.cycleName}</p>
          <p>当前纬度:{this.props.lng}</p>
          <p>当前经度:{this.props.lat}</p>

           
          </div>
          </Panel>
          <Panel>
          <div style={{marginTop:'30px'}}>
          <SelectUserList workflowid={this.props.params.workflowid} isReject={true}  onClose={this.onSelectUser.bind(this)} />
              <button type="button" className="btn btn-primary" onClick={this.onSubmitHanler.bind(this)} style={{width:'100%'}}>提交审批</button>
          </div>
          </Panel>
       </div>

          )

      }

 }
AcceptPage.defaultProps={

  title:null,
  stationName:null,
  currentActivity:null,
  cycleName:null,
  receiveTime:null,
  lng:0,
  lat:0,
  sheetno:null
}
function mapStateToProps(state) {

  if (state.todoReducer.entity) {
    return {
      title: state.todoReducer.entity.Title,
      stationName: state.todoReducer.entity.StationName,
      currentActivity: state.todoReducer.entity.CurrentActivityName,
      cycleName: state.todoReducer.entity.CycleName,
      receiveTime: state.todoReducer.entity.ReceiveTime,
      sheetno: state.todoReducer.entity.sheetId
    }
  }
  return {};
}
export default connect(mapStateToProps,{pushState,getItem,submitAccept})(AcceptPage)