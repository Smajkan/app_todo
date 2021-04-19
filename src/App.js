import React from "react"
import './App.css';
//Ubacivanje komponenata
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header>Aldin's ToDo list</header>

      <Form></Form>
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
