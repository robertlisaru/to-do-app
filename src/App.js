import './App.css'
import TodosList from './components/TodosList'
import { useState, useEffect } from 'react'
import Todos from './todos'

function App() {
  const [todos, setTodos] = useState({ data: [], isLoading: true })

  useEffect(() => {
    Todos.getAll().then((response) => setTodos({ data: response.data, isLoading: false }))
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>

      {todos.isLoading ? <p>Fetching todos...</p> :
        <TodosList todos={todos.data} />
      }

    </div>
  )
}

export default App
