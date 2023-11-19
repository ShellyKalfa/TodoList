
export const addTodoAction=({todo})=>{
  return(dispatch)=>{
    dispatch({
      type:'add',
      payload: todo
    })
  }
}
export const removeTodoAction=({index,todo})=>{
  return(dispatch)=>{
    dispatch({
      type:'remove',
      payload:{index,todo}
    })
  }
}
export const updateTodoAction=({index,todo})=>{
  return(dispatch)=>{
    dispatch({
      type:'update',
      payload: {index,todo}
    })
  }
}