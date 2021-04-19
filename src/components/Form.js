import React from "react";

//Isto sto i function Form(){//code}
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {


    const inputTextHandler = (e) => {

        setInputText(e.target.value);
    };


    //e.preventDefault() sprjecava da se stranica refreshuje
    //Linkujemo to sa buttonom
    //Ovdje također trebamo setovati listu
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() + 1000 }
        ]);
        setInputText("");
    };

    //Funkcija koja ce handleovati filtriranje
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    //Vraćati ćemo određenu vrijednost
    //vanilla-Code
    //Unutar inputa cemo dodati onClick (event)
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="Sve">Sve</option>
                    <option value="Zavrseno">Zavrseno</option>
                    <option value="Preostalo">Preostalo</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
