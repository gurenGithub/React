
export default function ListReducer(state = {},action)
{

	switch (action.type) {
		case 'List_ActionTypes':
			var _entity={};
			_entity[action.key]=action.entity;
			return Object.assign({}, state,entity);
		
		default:
			return state;
	}

	return state;
 }