import { combineReducers } from 'redux';
import ActionTypes from '../constants/ActionTypes';

const initialState = [{
	text: 'Learn Redux devtools',
	completed: false,
	id: 0
}];

function todos(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.ADD_TODO:
      console.log("State length: ", state.length)
			return [
				...state,
				{
					text: action.text,
					completed: false,
					id: state.length
				}
			];
		case ActionTypes.EDIT_TODO:
			return state;
		case ActionTypes.DELETE_TODO:
			return state.filter(todo => 
				todo.id !== action.id
			);
		default:
			return state;
	}

}


const rootReducer = combineReducers({
	todos
})


export default rootReducer;

// export default todos;