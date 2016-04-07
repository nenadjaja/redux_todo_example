import ActionTypes from '../constants/ActionTypes';

export function addTodo(text) {
	return { type: ActionTypes.ADD_TODO, text }
}

export function editTodo(text) {
	return { type: ActionTypes.EDIT_TODO, text }
}

export function deleteTodo(id) {
	return { type: ActionTypes.DELETE_TODO, id }
}