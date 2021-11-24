import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  const initialState = JSON.parse(localStorage.getItem('todos')) || []
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(initialState)
  const [editTodo, setEditTodo] = useState([])
  
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
},[todos])

  return (
    <div className="parent bg-info"  > 
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
          <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo} />
        </div>
        <div>
          <TodoList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo} />
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default App;
