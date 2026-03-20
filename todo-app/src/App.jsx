import TodoList from './components/TodoList'

function App() {
  const tasks = [
    { id: 1, title: 'Вивчити React', completed: true },
    { id: 2, title: 'Зробити Todo App', completed: false },
    { id: 3, title: 'Здати лабораторну', completed: false }
  ]

  return (
    <div className="app">
      <h1>Список задач</h1>
      <TodoList tasks={tasks} />
    </div>
  )
}

export default App