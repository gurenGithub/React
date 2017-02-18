import TodoActionTypes from './../constants/TodoActionTypes.js'
import API from './../Ajax/API.js'


export default function TodoReducer(state = {list: [],entity:{}},action)
{

	switch (action.type) {

		case TodoActionTypes.TODO_LIST:

		    var list = action.list;
			var totalCount = action.totalCount;
			return Object.assign({}, state, {
				list: list,
				totalCount: totalCount,
				page:action.page,
				pageSize:action.pageSize,
				searchItems:action.searchItems
			})
		case TodoActionTypes.DONE_LIST:

			var list = action.list;
			var totalCount = action.totalCount;
			return Object.assign({}, state, {
				list: list,
				totalCount: totalCount,
				page:action.page,
				pageSize:action.pageSize,
				searchItems:action.searchItems
			})

		case TodoActionTypes.TODO_INFO:
			var entity = action.entity;
			return Object.assign({}, state, {
				entity: entity
			})

		case TodoActionTypes.TODO_SUBMITCONSTUCTION:
			break

		case TodoActionTypes.TODO_ACCEPT:

			break;
		default:
			return state;
	}

	return state;
 }