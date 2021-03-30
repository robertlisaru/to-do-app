import './App.css'
import TodosList from './components/TodosList'
import NewTodoForm from './components/NewTodoForm'
import { useState, useEffect } from 'react'
import Todos from './todos'

function App() {
  const [todos, setTodos] = useState({ data: [], isLoading: true })

  const fetchTodos = () => {
    Todos.getAll().then((response) => setTodos({ data: response.data, isLoading: false }))
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>

      {todos.isLoading ? <p>Fetching todos...</p> :
        <>
          <NewTodoForm notifyChange={fetchTodos} />
          <TodosList todos={todos.data} notifyChange={fetchTodos} />
        </>
      }

    </div>
  )
}

export default App
