import CommonActionTypes from './../constants/CommonActionTypes.js'
import API from './../Ajax/API.js'

export function getList(method,searchItems, currentPage, pageSize, onSuccess,onBefore,onError) {
	return (dispatch, getState) => {
		API.common.getList(method,searchItems, currentPage, pageSize, function(data) {
           var _data = onSuccess(data);
           if(!_data.list){
           	_data.list=_data.data;
           }
           _data.fields=data.Data.Fields;
			dispatch({
				type: CommonActionTypes.COMMOM_LIST,
				list: _data.list,
				totalCount: _data.totalCount,
				fields:_data.fields
			})

		},onBefore,onError)
	}

}