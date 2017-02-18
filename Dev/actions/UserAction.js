
import UserActionTypes from './../constants/UserActionTypes.js'
export function login(userName, password,onSuccess) {

  return  {

    type: UserActionTypes.USER_LOGIN,
    userName: userName,
    password: password,
    onSuccess:onSuccess
  }

}

export function userInfo(){

return {type:UserActionTypes.USER_INFO}

}