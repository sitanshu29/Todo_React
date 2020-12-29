import React from 'react'
import './App.css';
import TodoList from './Components/TodoList';
//Importing Components


function App() {
  return (
    <div className="App">
      <header>
        <h1>Sitanshu's Todo List</h1>
      </header>

      <TodoList />
    </div>
  );
}

export default App;
