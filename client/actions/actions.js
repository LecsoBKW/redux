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

export const deleteRow = (e) => {
  return {
    type : "DELETE_ROW",
    id : e
  }
}
