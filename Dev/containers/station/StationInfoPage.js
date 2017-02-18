import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import AccountLogin from './../../components/common/AccountLogin.js'
import { Router, Route, browserHistory,Link  } from 'react-router';
import { connect } from 'react-redux'
import Back from './../../components/ui/Back.js'
import {getStationInfo} from '../../actions/StationAction.js'
import { pushState } from 'redux-router'
import Panel from './../../components/ui/panel'
import SelectUserList from './../../components/common/SelectApprovalUser'
import  Win from '../../components/ui/Win.js'

 class StationInfoPage extends Component{


  
  
  constructor(props){
    super(props);
    this.state={entity:{},isFetching:true}
  }
      componentWillMount()
      {
        var workflowId=this.props.params.stationId;


this.setState({isFetching:true});
        this.props.getStationInfo(workflowId,function(){

this.setState({isFetching:false});
        }.bind(this),function(){

        }.bind(this));
      }


      

      renderItem(){

        if(this.state.isFetching){


          return <div className='center'>数据加载中</div>
        }

return  (<Panel>
          <div className='center'>
          <h4>{this.props.stationName}</h4>
          <p>工单号:{this.props.sheetno}</p>
          <p>站点名称:{this.props.stationName}</p>
          <p>周期:{this.props.cycleName}</p>
          <p>当前步骤:{this.props.currentActivity}</p>
          <p>接收时间:{this.props.receiveTime}</p> 
          </div>
          </Panel>)

      }
  
      render(){

        
var workflowId=this.props.params.workflowid;

          return  (
          <div>
          <Back title="站点明细" isFixedTop={false} onBack={()=>{
           this.props.history.push('/station');
       }.bind(this)}></Back>

          
          {this.renderItem()}
       </div>

          )

      }

 }
StationInfoPage.defaultProps={
  entity:{}
}
function mapStateToProps(state) 
{
  if(state.stationReducer.entity){
  return {
         title:state.stationReducer.entity.Title,
          stationName:state.stationReducer.entity.StationName,
          currentActivity:state.stationReducer.entity.CurrentActivityName,
          cycleName:state.stationReducer.entity.CycleName,
          receiveTime:state.stationReducer.entity.ReceiveTime,
          sheetno:state.stationReducer.entity.sheetId
    }
  }
  return {}
}
export default connect(mapStateToProps,{pushState,getStationInfo})(StationInfoPage)