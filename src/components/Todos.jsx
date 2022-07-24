import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
   let myStyle = {
      minHeight: "70vh",
      margin: "40px auto"
   }
   return (
      <div className='container my-3' style={myStyle}>
         <h3 className='my-3'>ToDo List</h3>

         {/* Important for looping in array
         Using key is option but best practice.
          */}
         {props.todos.length === 0 ? "No ToDos to display" :
            props.todos.map((todo) => {
               return (
                  <>
                     <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                     <hr />
                  </>
               )
            })
         }

      </div>
   )
}
