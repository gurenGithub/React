import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import {doneList} from '../../actions/TodoAction.js'
import { pushState } from 'redux-router'

import Back from './../../components/ui/Back.js'
import List from './../../components/ui/List.js'

 class DonePage extends Component{


constructor(props){
	super(props)
	
}


  componentWillMount()
  {
     this.props.doneList([],1,15,function(data)
     {
           if(data.Code==200)
           {
               this.setState({'data':data.Data.List})
           }
     }.bind(this));
  }
  onRenderItem(item){

  	return (<div>
  		 <h4>{item.Title}</h4>
  		 <p>当前步骤:{item.CurrentActivityName}</p>
  		 <p>接收时间:{item.ReceiveTime}</p></div>)
  }

	onItemClickHandler(item) {


	}
	render(){

		return <div>
			<Back title="已办工单" isFixedTop={false} onBack={()=>{this.props.history.push('/home/xx')}.bind(this)}/>
			  <div >
			<List onRenderItem={this.onRenderItem.bind(this)}  onItemClick={this.onItemClickHandler.bind(this)} pageSize={15} onFetch={(searchItems,page,pageSize,onSuccess)=>{
            this.props.doneList(searchItems,page,pageSize,function(data)
     {
           if(data.Code==200)
           {
               onSuccess(data.Data)
           }
     }.bind(this));

			}}></List>
			</div>
		</div>

	}
}
DonePage.defaultProps={

	list:[],
	totalCount:0,
}

function mapStateToProps(state) {
  return {
     list:state.todoReducer.list,
     totalCount:state.todoReducer.totalCount
    }
}

export default connect(mapStateToProps,
 {
  pushState,doneList
  })(DonePage)