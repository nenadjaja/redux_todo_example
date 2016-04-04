import { combineReducers } from 'redux'

const initialState = [{
	text: 'Learn Redux devtools',
	completed: false,
	id: 0
}];

function todos(state = initialState, action) {
	switch (action.type) {
		case 'test':
			return state;
		default:
			return state;
	}

}


const rootReducer = combineReducers({
	todos
})


export default rootReducer;

// export default todos;