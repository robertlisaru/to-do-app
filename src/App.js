import './App.css'
import TodosList from './components/TodosList'
import { useState, useEffect } from 'react'
import Todos from './todos'

function App() {
  const [todos, setTodos] = useState({ data: [], isLoading: true })
  const [newTodoTitle, setNewTodoTitle] = useState('')

  const fetchTodos = () => {
    Todos.getAll().then((response) => setTodos({ data: response.data, isLoading: false }))
  }

  const createTodo = () => {
    Todos.create({ title: newTodoTitle }).then(() => {
      fetchTodos()
      setNewTodoTitle('')
    })
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
          <input value={newTodoTitle} onChange={(event) => { setNewTodoTitle(event.target.value) }}
            type='text'
            placeholder='What needs to be done' />
          <button onClick={createTodo}>Add</button>
          <TodosList todos={todos.data} notifyChange={fetchTodos} />
        </>
      }

    </div>
  )
}

export default App
