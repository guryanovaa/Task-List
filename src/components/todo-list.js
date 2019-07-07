import React from 'react';
import ReactDOM from 'react-dom';

import TodoListItem from './todo-list-item'; 

const TodoList = ({todos}) => {

   const elements = todos.map((item) => {
     return (
        <li>
            <TodoListItem {...item}/>
        </li>
     );
   });

   return (
        <ul>
            {elements}
        </ul>
   );
};

export default TodoList;