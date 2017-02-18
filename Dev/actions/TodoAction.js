import TodoActionTypes from './../constants/TodoActionTypes.js'
import API from './../Ajax/API.js'

export function todoInfo() {




	return {
		type: TodoActionTypes.TODO_INFO
	}

}


export function getItem(workflowId){

	return (dispatch, getState) => {

      API.workflow.getItem(workflowId,function(data){
          
         dispatch({
				type: TodoActionTypes.TODO_INFO,
				entity: data.Data.Entity
			})
     })
	}
}

export function todoList(searchItems, currentPage, pageSize, onSuccess) {

	return (dispatch, getState) => {

		API.workflow.todoList(searchItems, currentPage, pageSize, function(data) {


            var _data = onSuccess(data);
           if(!_data.list){
           	_data.list=_data.data;
           }
			dispatch({
				type: TodoActionTypes.TODO_LIST,
				list: _data.list,
				totalCount: _data.totalCount,
				page:currentPage,
				pageSize:pageSize,
				searchItems:searchItems,
			})

		})
	}

}

export function doneList(searchItems, currentPage, pageSize, onSuccess) {

	return (dispatch, getState) => {

		API.workflow.doneList(searchItems, currentPage, pageSize, function(data) {


             onSuccess(data);
			dispatch({
				type: TodoActionTypes.DONE_LIST,
				list: data.Data.List,
				totalCount: data.Data.TotalCount
			})

		})
	}

}
export function submitContruction(workflowid,approvalUser,onSuccess,onBefore,onError){

return (dispatch, getState) => {

		API.workflow.submitContruction(workflowid, approvalUser,
			function(data) {
             onSuccess(data);
			 dispatch({
				type: TodoActionTypes.TODO_LIST,
				list: data.Data.List,
				totalCount: data.Data.TotalCount
			})

		},onError,onBefore)
	}
}

export function submitAccept(workflowid,approvalUser,isPass,onSuccess,onBefore,onError){

return (dispatch, getState) => {

		API.workflow.submitAccept(workflowid, approvalUser,isPass,
			function(data) {
             onSuccess(data);
			 dispatch({
				type: TodoActionTypes.TODO_LIST,
				list: data.Data.List,
				totalCount: data.Data.TotalCount
			})

		},onError,onBefore)
	}
}