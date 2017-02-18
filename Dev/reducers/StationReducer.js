import StationActionTypes from './../constants/StactionActionTypes.js'
import API from './../Ajax/API.js'
import xUtils from './../middleware/xUtils.js'

export default function StationReducer(state = {list: [],entity:{}},action)
{

	switch (action.type) {
		case StationActionTypes.STATION_LIST:	
		  return xUtils.reducer.assignList(action,state)
		case StationActionTypes.STATION_INFO:
		  return xUtils.reducer.assignEntity(action,state);
		default:
			return state;
	}

	return state;
 }