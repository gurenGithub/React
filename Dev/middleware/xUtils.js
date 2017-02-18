var xUtils = {


     formater:
     {
     	list:function(data){
           return {list:data.Data.List,totalCount:data.Data.TotalCount};
        }
     },

	action: {
		dispatchList: function(dispatch, actionType, data) {
			dispatch({
				type: actionType,
				list: data.Data.List,
				totalCount: data.Data.TotalCount
			});
		},
		dispatchEntity:function(dispatch,actionType,data){

			 dispatch({
				type: actionType,
				entity: data.Data.Entity
			})
		}
	},
	reducer: {
		assignList: function(action,state) {
				var list = action.list;
				var totalCount = action.totalCount;
				var Orgilist= state.list?state.list:[];
                Orgilist=  Orgilist.concat(list);
				return Object.assign({}, state, {
					list: Orgilist,
					totalCount: totalCount
				})
			},

	   assignEntity:function(action,state){
	   	var entity = action.entity;
			return Object.assign({}, state, {
				entity: entity
			})
	   }
	}
}

module.exports = xUtils;