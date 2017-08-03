import React from 'react'
import Row from '../components/Row'

const TodoReducer = (
  state = {
    todos : [],
    newTodo : ""
  },
  action) => {
    let newState = JSON.parse(JSON.stringify(state));
    if(action.type == "ADD_TODO") {
      newState.todos.push(state.newTodo);
      newState.newTodo = '';
      return newState;
    }
    else if(action.type == "VALUE_CHANGED") {
      newState.newTodo = action.text;
      return newState;
    }
    return state;
}

export default TodoReducer
