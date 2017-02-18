import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import {todoList} from '../../actions/TodoAction.js'
import { pushState } from 'redux-router'
import Back from './../../components/ui/Back.js'
import List from './../../components/ui/List.js'

 class TodoPage extends Component{


   constructor(props){
	  super(props)
	   this.state={
				'data': this.props.list
			};
   }


	componentWillMount() {


		
		if (this.props.list.length > 0) {

			this.setState({
				'data': this.props.list
			})
		} 
	}
  onRenderItem(item){

  	return (<div>
  		<h4>{item.Title}</h4>
  		 <p>当前步骤:{item.CurrentActivityName}</p>
  		 <p>接收时间:{item.ReceiveTime}</p></div>)
  }


componentDidMount(){

	
	
}

onFetch(searchItems, page, pageSize, onSuccess)
	 {

	 	
		this.props.todoList(searchItems, page, pageSize, function(data) {
			if (data.Code == 200) {
				return onSuccess(data.Data)
			}
		}.bind(this));

	}
  componentWillReceiveProps(newProps){


  }

	onTodoItemClickHandler(item) {


var workflowId=item.WorkflowID;
var isEnable= item.IsEnable;
var currentActivityType=item.CurrentActivityType;

var newUrl;
		if(currentActivityType=="SG"){
			newUrl =("/construction/"+workflowId)
		}else if(currentActivityType=="YS"){
				newUrl=("accept/"+workflowId)
		}else{
			return ;
		}

  this.props.history.push(newUrl);
		//window.open(newUrl,"_blank");
	}
	render(){

		return <div>
			<Back title="我的代办" isFixedTop={false} onBack={

			()=>{
				     this.props.history.push('/home/xx')}.bind(this)
				}/>
			  <div >
			<List onRenderItem={this.onRenderItem.bind(this)}  
			onItemClick={this.onTodoItemClickHandler.bind(this)}
			 pageSize={15} 
			 page={this.props.page}
			 data={this.props.list}
			 onFetch={this.onFetch.bind(this)}   
			 onRenderCompleted={
			 ()=>
				{
                  this.props.route.operator.setList();
			}.bind(this)}></List>
			</div>
		</div>

	}
}
TodoPage.defaultProps={

	list:[],
	totalCount:0,
	page:1,
	pageSize:15,
	searchItems:[]
}

function mapStateToProps(state) {
  return {
     list:state.todoReducer.list,
     totalCount:state.todoReducer.totalCount,
     page:state.todoReducer.page,
	 pageSize:state.todoReducer.pageSize,
	 searchItems:state.todoReducer.searchItems,
    }
}

export default connect(mapStateToProps,
 {
  pushState,todoList
  })(TodoPage)