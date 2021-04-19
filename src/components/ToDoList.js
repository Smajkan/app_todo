import React from 'react';


//Ubacivanje Todo
import Todo from './Todo'
const ToDoList = () => {
    return (
        <div className="todo-container">
            <ul className="todo-list"></ul>
            <Todo />
        </div>

    );
};

export default ToDoList;