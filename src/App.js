import './App.css';
import Header from './components/Header';   // Default Import
import { Todos } from './components/Todos'; // Named Import
import { Footer } from './components/Footer';
import { AddTodo } from './components/AddTodo';
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }


  const addTodo = (title, desc) => {
    let sno
    if (todos.length === 0)
      sno = 1 // If list is empty.
    else
      sno = todos[todos.length - 1].sno + 1

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo])

    console.log("adding todo", myTodo)
  }

  const onDelete = (todo) => {
    console.log('Deleted Todo !!!', todo)
    // Deleting this way in react will not upadate frontend.
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    // Here we utilize the concepts of useState. Convert array to useState.
    setTodos(todos.filter((e) => {  // nice trick to delete
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      {/* String ko paas krne k liye single/double quote use krte hai.
    But other data/variable ki valse ko paas krne k liye braces ka use hota hai.
     */}
      <Header title="MyTodosList" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
