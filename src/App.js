import './App.css'
import TodosList from './components/TodosList'
import TodosListHook from './hooks/TodosListHook'

function App() {
  const data = TodosListHook()

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
