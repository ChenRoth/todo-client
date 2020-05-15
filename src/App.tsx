import React from 'react';
import './App.css';
import { Todo } from './components/Todo/Todo';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
