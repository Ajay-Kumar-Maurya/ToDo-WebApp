import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
   return (
      <div className='container'>
         <h3 className='text-center'>ToDo List</h3>

         {/* Important for looping in array
         Using key is option but best practice.
          */}
         {props.todos.length === 0 ? "No ToDos to display" :
            props.todos.map((todo) => {
               return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })
         }

         <hr />

         {/* Important when we want to return multpile tags and looping in array.
         We need to use parentheses and wrap all tags.

         Doubt : Below code shows warning fpr unique key
         */}
         {props.todos.map((todo) => {
            return (
               <>
                  <h3>Simple H3 Tag</h3>
                  <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
               </>
            )
         })}

      </div>
   )
}
