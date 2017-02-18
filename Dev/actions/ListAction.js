import API from './../Ajax/API.js'
import xUtils from './../middleware/xUtils.js'
const ListActionTypes='List_ActionTypes';

export function getList(method,key,searchItems, currentPage, pageSize, onSuccess,onBefore,onError) {
	return (dispatch, getState) => {
		API.common.getList(method,searchItems, currentPage, pageSize, function(data) {
             onSuccess(data);
			dispatch({
				type: ListActionTypes,
                key:key,
				entity:xUtils.formater.lis(data)
			})

		},onBefore,onError)
	}

}