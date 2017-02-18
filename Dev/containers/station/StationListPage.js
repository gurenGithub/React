import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import {getStationList} from '../../actions/StationAction.js'
import { pushState } from 'redux-router'
import List from './../../components/ui/Pages/ListPage.js'

 class StationListPage extends Component{


constructor(props){
	super(props)
}

  onRenderItem(item){

  	return (<div>
  		 <h4>{item.StationName}</h4>
  		 <p>当前步骤:{item.CurrentActivityName}</p>
  		 <p>归属周期:{item.CycleName}</p></div>)
  }

  onItemClick(item) {

    this.props.history.push('station/' + item.WorkflowID);
  }


   onFetch(searchItems,page,pageSize,onSuccess)
   {
     
    this.props.getStationList(searchItems, page, pageSize, function(data) {
      if (data.Code == 200) {
       return  onSuccess(data.Data)
      }
    }.bind(this));
  }
   onBack(){
    this.props.history.push('/home/admin')
   }
	render(){

		 return (<div><List 
         onBack={this.onBack.bind(this)} 
         onFetch={this.onFetch.bind(this)} 
         onItemClick={this.onItemClick.bind(this)}
         title="站点列表"  
         onRenderItem={this.onRenderItem.bind(this)} 
         fields={[{name:'StationName',title:'站点名称'}]} ></List></div>);

	}
}
StationListPage.defaultProps={

data:[],
totalCount:0
}

function mapStateToProps(state) 
{

  return {
    
    }
}

export default connect(mapStateToProps,
 {
  pushState,getStationList
  })(StationListPage)