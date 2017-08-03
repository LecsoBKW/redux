export const addTodo = () => {
  return {
    type : 'ADD_TODO'
  }
}

export const valueChanged = (e) => {
  return {
    type : "VALUE_CHANGED",
    text : e
  }
}
