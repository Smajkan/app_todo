import React, { useState } from "react"
import './App.css';
//Ubacivanje komponenata
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {


  const [inputText, setInputText] = useState("");
  //Ovo dodajemo zbog zavrseno, nezavrseno...
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>Aldin's ToDo </header>

      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <ToDoList todos={todos} />



    </div>
  );
}

export default App;
