import APIBase from './APIBase.js'


const webApiUrl = 'http://localhost:7676/WebApi/App/MobileApp.ashx'
const token='iY4/zpM666cM4DBX1LjFHI9fny9B1KckaIX1VTgu4FZOUfOylAAqzcuDx9m/Mt0hjJt2KYcu9fyDXDO8MopHEtsLQddHPz8wtT4Ax71k8GSwhQOvRML1Bg==';

var API = {


	user: {
        entity:null,
		login: function(userName, password, onSuccess, onError, onBefore) {
			APIBase.post(webApiUrl, {
					module: 'Login',
					param: {
						LoginID: userName,
						Password: password,
						IMEI: '200099'
					}
				}, function(data) {

					if (onSuccess) {
						onSuccess(data);

						this.entity=data
					}

				}.bind(this), function(data) {
					if (onError) {
						onError(data)
					}
				},
				function() {
					if (onBefore) {
						onBefore()
					}
				})

		}
	},
	workflow:{
		 todoList:function(searchItems, currentPage, pageSize,onSuccess){

              APIBase.post(webApiUrl, {
					module: 'GetTodoList',
					param: {
						SearchItems: (searchItems ),
						Page: (currentPage ),
						Rows: (pageSize )
					},
					token:token
				}, function(data) {

					if (onSuccess) {
						onSuccess(data);
					}

				}.bind(this), function(data) {
					if (onError) {
						onError(data)
					}
				},
				function() {
					if (onBefore) {
						onBefore()
					}
				})

		 },
		 doneList:function(searchItems, currentPage, pageSize,onSuccess){

              APIBase.post(webApiUrl, {
					module: 'GetDoneList',
					param: {
						SearchItems: (searchItems ),
						Page: (currentPage ),
						Rows: (pageSize )
					},
					token:token
				}, function(data) {

					if (onSuccess) {
						onSuccess(data);
					}

				}.bind(this), function(data) {
					if (onError) {
						onError(data)
					}
				},
				function() {
					if (onBefore) {
						onBefore()
					}
				})

		 },
		 getItem:function(workflowId,onSuccess,onError,onBefore){

		 	APIBase.post(webApiUrl, {
					module: 'GetStation',
					param: {
						WorkflowID: (workflowId)
					},
					token:token
				}, function(data) {

					if (onSuccess) {
						onSuccess(data);
					}

				}.bind(this), function(data) {
					if (onError) {
						onError(data)
					}
				},
				function() {
					if (onBefore) {
						onBefore()
					}
				})
		 },
		 getApprovalUser:function(workflowId,currentPage, pageSize,onSuccess){

		 	APIBase.post(webApiUrl, {
					module: 'GetApprovalUser',
					param: {
						SearchItems: [{Name:"WorkflowID" , Value:workflowId, Patten:'Like'}],
						Page: (currentPage ),
						Rows: (pageSize )
					},
					token:token
				}, function(data) {

					if (onSuccess) {
						onSuccess(data);
					}

				}.bind(this), function(data) {
					if (onError) {
						onError(data)
					}
				},
				function() {
					if (onBefore) {
						onBefore()
					}
				})
		 },
		 getRejectApprovalUser:function(workflowId,currentPage, pageSize,onSuccess){

		 	APIBase.post(webApiUrl, {
					module: 'GetApprovalRejectUser',
					param: {
						SearchItems: [{Name:"WorkflowID" , Value:workflowId, Patten:'Like'}],
						Page: (currentPage ),
						Rows: (pageSize )
					},
					token:token
				}, function(data) {

					if (onSuccess) {
						onSuccess(data);
					}

				}.bind(this), function(data) {
					if (onError) {
						onError(data)
					}
				},
				function() {
					if (onBefore) {
						onBefore()
					}
				})
		 },
		 submitContruction:function(workflowId,approvalUser,onSuccess,onError,onBefore){

			APIBase.post(webApiUrl, {
					module: 'SGStation',
					param: {
						WorkflowID: workflowId,
						ApprovalUserID: approvalUser,
					},
					token: token
				}, function(data) {

					if (onSuccess) {
						onSuccess(data);
					}

				}.bind(this), function(data) {
					if (onError) {
						onError(data)
					}
				},
				function() {
					if (onBefore) {
						onBefore()
					}
				})
		}
			,
	submitAccept:function(workflowId,approvalUser,isPass,onSuccess,onError,onBefore){

			APIBase.post(webApiUrl, {
					module: 'YSStation',
					param: {
						WorkflowID: workflowId,
						ApprovalUserID: approvalUser,
						IsPass:isPass
					},
					token: token
				}, function(data) {

					if (onSuccess) {
						onSuccess(data);
					}

				}.bind(this), function(data) {
					if (onError) {
						onError(data)
					}
				},
				function() {
					if (onBefore) {
						onBefore()
					}
				})
		}
		

	},
	common:{
         getList:function(method,searchItems, currentPage, pageSize,onSuccess,onBefore,onError){

              APIBase.post(webApiUrl, {
					module: method,
					param: {
						SearchItems: (searchItems ),
						Page: (currentPage ),
						Rows: (pageSize )
					},
					token:token
				}, function(data) {

					if (onSuccess) {
						onSuccess(data);
					}

				}.bind(this), function(data) {
					if (onError) {
						onError(data)
					}
				},
				function() {
					if (onBefore) {
						onBefore()
					}
				})

		 },
		 getEntity:function(method,param,onSuccess,onError,onBefore){

		 	APIBase.post(webApiUrl, {
					module: method,
					param: param,
					token:token
				}, function(data) {

					if (onSuccess) {
						onSuccess(data);
					}

				}.bind(this), function(data) {
					if (onError) {
						onError(data)
					}
				},
				function() {
					if (onBefore) {
						onBefore()
					}
				})
		 },

	},
	station:{
		getList:function(searchItems, currentPage, pageSize,onSuccess,onBefore,onError){
              API.common.getList("GetStationList",searchItems,currentPage,pageSize,onSuccess,onBefore,onError)

		 },
		 getEntity:function(workflowid,onSuccess,onError,onBefore){

        API.common.getEntity("GetStationInfo",{WorkflowID:workflowid},onSuccess,onError,onBefore)
		 }
	}
	

}
module.exports = API;
//export default API;