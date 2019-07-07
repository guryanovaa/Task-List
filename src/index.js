import React from 'react';
import ReactDOM from 'react-dom';
 
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

    const todoData = [
       {label: 'Drink Coffee', important: false},
       {label: 'Eat Cake', important: false},
       {label: 'Cook Dinner', important: true}
    ];

    return (
     <div>
        <AppHeader />
        <SearchPanel />
        <TodoList  todos = { todoData }/>
     </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));
