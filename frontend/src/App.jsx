import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  // New Feature: Function to delete a todo by its index
  const handleDelete = (indexToDelete) => {
    const newTodos = todos.filter((todo, index) => index !== indexToDelete);
    setTodos(newTodos);
  };

  // Helper function to update UI immediately for testing
  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      {/* Pass the add function as a prop */}
      <CreateTodo onAdd={handleAddTodo}></CreateTodo>
      
      {/* Pass the delete function as a prop */}
      <Todos todos={todos} onDelete={handleDelete}></Todos>
    </div>
  )
}

export default App