import UserActionTypes from './../constants/UserActionTypes.js'
import API from './../Ajax/API.js'



var userInfo={

}

function login(action) 
{

	API.user.login(action.userName,action.password,function(result){

if(action.onSuccess){
	 userInfo=result.Data;
	 action.onSuccess(result.Data)
	 
	}

	});
}

export default function UserReducer(state={user:{}}, action) {

	switch (action.type) {

		case UserActionTypes.USER_LOGIN:
			 login(action);
			break;
		case UserActionTypes.USER_INFO:

			return Object.assign({}, state, {
				user: userInfo
			})
			break;
		default:
			return state;
	}

	return state;

}