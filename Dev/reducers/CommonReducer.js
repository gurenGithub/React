import CommonActionTypes from './../constants/CommonActionTypes.js'
import API from './../Ajax/API.js'


export default function CommonReducer(state = {list: [],entity:{}},action)
{

	switch (action.type) {
		case CommonActionTypes.COMMOM_LIST:
			var list = action.list;
			var totalCount = action.totalCount;
			return Object.assign({}, state, {
				list: list,
				totalCount: totalCount,
				fields:action.fields
			})
		
		default:
			return state;
	}

	return state;
 }