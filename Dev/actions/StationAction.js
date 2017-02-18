import StationActionTypes from './../constants/StactionActionTypes.js'
import API from './../Ajax/API.js'
import xUtils from './../middleware/xUtils.js'

export function getStationList(searchItems, currentPage, pageSize, onSuccess,onBefore,onError) {

	return (dispatch, getState) => {
		API.station.getList(searchItems, currentPage, pageSize, function(data) {
            onSuccess(data);
			xUtils.action.dispatchList(dispatch,StationActionTypes.STATION_LIST,data)
		},onBefore,onError)
	}

}


export function getStationInfo(workflowid, onSuccess,onBefore,onError) {

	return (dispatch, getState) => {
		API.station.getEntity(workflowid, function(data) {   
		  onSuccess(data);
			xUtils.action.dispatchEntity(dispatch,StationActionTypes.STATION_INFO,data)
		},onBefore,onError)
	}

}