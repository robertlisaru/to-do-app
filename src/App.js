import './App.css'
import TodosList from './components/TodosList'
import { useState, useEffect } from 'react'
import Todos from './todos'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    Todos.getAll().then((response) => setTodos(response.data))
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>

      <TodosList todos={todos} isFetching={false} />

    </div>
  )
}

export default App
