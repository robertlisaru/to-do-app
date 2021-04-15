import './App.css'
import TodosList from './components/TodosList'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import Todos from './todos'
import LinearProgress from '@material-ui/core/LinearProgress'

function App() {
  const [todos, setTodos] = useState({ data: [], isLoading: true })

  const fetchTodos = async () => {
    const response = await Todos.getAll()
    setTodos({ data: response.data, isLoading: false })
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className="app">
      {todos.isLoading ?
        <LinearProgress />
        :
        <>
          <Header notifyChange={fetchTodos} />
          <TodosList todos={todos.data} notifyChange={fetchTodos} />
        </>
      }

    </div >
  )
}

export default App
