import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import { Register } from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Register />
      <TodoList />
    </div>
  );
}

export default App;
