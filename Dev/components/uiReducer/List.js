import React,{Component} from 'react'
import {getList} from '../../actions/ListAction.js'
import { Router, Route, browserHistory,Link  } from 'react-router';
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import OrgList from './../ui/List.js'

var _key=null;
 class List extends Component {
 	constructor(props) {
 		super(props)
 		_key = this.props.key;
 	}


	onFetch(searchItems,page,pageSize,onSuccess) {
       this.props.getList(this.props.module,this.props.key,searchItems,page,pageSize,onSuccess);
	}
	componentWillMount() {

		if (this.props.list && this.this.props.list.length == 0) {
			this.onFetch()

		}
	}

	onItemClick(item){

	}
	onRenderItem(item){
		
	}
	render() {
 return <OrgList onRenderItem={this.onRenderItem.bind(this)}  
			onItemClick={this.onTodoItemClickHandler.bind(this)}
			 pageSize={15} 
             data={this.state.data}
			 onFetch={this.onFetch.bind(this)}></OrgList>
	}

}

List.propTypes={
	scrollTop:0,
	list:[],
	totalCount:0,
	key:null,
    module:null,
    searchItems:[],
    page:1,
    pageSize:15
}

function mapStateToProps(state) {
	if (state.listReducer[_key]) {
		return {
			scrollTop: state.listReducer[_key].scrollTop,
			list: state.listReducer[_key].stationReducer,
			totalCount: state.listReducer[_key].totalCount
		}
	}
	return {}
}
export default connect(mapStateToProps,{pushState,getList})(List)