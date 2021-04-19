import React, { useState, useEffect } from "react"
import './App.css';
//Ubacivanje komponenata
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {


  const [inputText, setInputText] = useState("");
  //Ovo dodajemo zbog zavrseno i nezavrseno...
  const [todos, setTodos] = useState([]);
  //Ovo se koristi da bi se filterovale stvari
  const [status, setStatus] = useState('all'); //default je all
  const [filteredTodos, setFilteredTodos] = useState([]);


  //KORISTENJE USEEFFECT-A ZBOG TOGA DA SE FILTRIRANJE UPDATEUJE
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  //Funkcije
  const filterHandler = () => {
    switch (status) {
      case 'Zavrseno':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'Preostalo':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>Aldin's ToDo </header>

      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <ToDoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />



    </div>
  );
}

export default App;
