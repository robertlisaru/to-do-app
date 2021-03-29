import './App.css'
import TodosList from './components/TodosList'
import useTodosList from './hooks/useTodosList'

function App() {
  const data = useTodosList()

  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>

      <TodosList todos={data.todos} isFetching={data.isFetching} />

    </div>
  )
}

export default App
