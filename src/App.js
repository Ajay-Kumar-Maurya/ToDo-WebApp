import './App.css';
import Header from './components/Header';   // Default Import
import { Todos } from './components/Todos'; // Named Import
import { Footer } from './components/Footer';
import React, { useState } from 'react';

function App() {
  const onDelete= (todo) => {
    console.log('Deleted Todo !!!', todo)
    // Deleting this way in react will not upadate frontend.
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    // Here we utilize the concepts of useState. Convert array to useState.
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Job 1",
      desc: "Go and complete job 1"
    },
    {
      sno: 2,
      title: "Job 2",
      desc: "Go and complete job 2"
    },
    {
      sno: 3,
      title: "Job 3",
      desc: "Go and complete job 3"
    }
  ])

  return (
    <>
      {/* String ko paas krne k liye single/double quote use krte hai.
    But other data/variable ki valse ko paas krne k liye braces ka use hota hai.
     */}
      <Header title="MyTodosList" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
