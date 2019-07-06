import React from 'react';
import ReactDOM from 'react-dom';

import TodoListItem from './todo-list-item'; 

const TodoList = () => {
   return (
        <ul>
            <li><TodoListItem /></li>
            <li><TodoListItem /></li>
        </ul>
   );
};

export default TodoList;