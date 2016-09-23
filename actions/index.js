import ActionTypes from '../constants/ActionTypes';

export function addTodo(text) {
  return { type: ActionTypes.ADD_TODO, text }
}

export function editTodo(id, text) {
  return { type: ActionTypes.EDIT_TODO, id, text }
}

export function deleteTodo(id) {
  return { type: ActionTypes.DELETE_TODO, id }
}

export function completeTodo(id) {
  return { type: ActionTypes.COMPLETE_TODO, id }
}
