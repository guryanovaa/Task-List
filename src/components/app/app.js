import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
  
  maxId = 4;

  createTodoItem(label) {
    return  {
        label,
        important: false,
        done: false,
        id: this.maxId++
    }
  }

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ],
    term: '',
    filter: 'all'
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex( (el) => el.id === id );
      const newArray = [ 
           ...todoData.slice(0, idx),
           ...todoData.slice( idx+1 )] 
       return {
         todoData: newArray
       };
      });
  };

  addItem = (text) => { 
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [
          ...todoData, newItem
      ]
      return {
        todoData: newArr
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex( (el) => el.id === id );

    const oldItem = arr[idx];
    const newItem =  { ...oldItem, [propName]: !oldItem[propName]};

    return [ 
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice( idx+1 )
    ]; 
  }


  onToggleImportante = (id) => {
   this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
       };
      });
  };

  onToggleDone = (id) => {
   this.setState(({todoData}) => {
    return {
      todoData: this.toggleProperty(todoData, id, 'done')
     };
    });
  };

  onSearchChange = (term) =>{
    this.setState({term});
  }; 
   

  search = (items, term) => {
       return items.filter( (item) => {
       return item.label
         .toLowerCase().indexOf(term.toLowerCase()) > -1;
     });
  };

  filter = (items, filter) => {
     switch(filter) {
       case "all": 
         return items;
       case "active":
         return items.filter( (item) => !item.done);
       case "done":
         return items.filter( (item) => item.done);       
     };
  };

  onFilterChange = (filter) =>{
    this.setState({filter});
  }; 

  render() {
    const {todoData, term, filter} = this.state;

    const visibleItems = this.filter(
                         this.search(todoData, term), filter);
    const doneCount = todoData.filter( (el) => el.done ).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel 
          onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter filter={filter}
          onFilterChange={this.onFilterChange}/>
        </div>
  
        <TodoList 
        todos={visibleItems}
        onDeleted = { this.deleteItem }
        onToggleImportante = { this.onToggleImportante}
        onToggleDone = {this.onToggleDone} />
        <ItemAddForm onItemAdded = {this.addItem}/>
      </div>
    );
  };
};

