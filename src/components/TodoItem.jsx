import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      {/** This function will be called automatically. To resolve this, use arrow function.
       * <button className='btn btn-sm btn-danger' onClick={onDelete(todo)}>Delete</button> */}   
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
