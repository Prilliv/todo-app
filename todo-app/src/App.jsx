import { useState } from 'react'
import TodoList from './components/TodoList'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Вивчити React', completed: true },
    { id: 2, title: 'Зробити Todo App', completed: false },
    { id: 3, title: 'Здати лабораторну', completed: false }
  ])

  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    const trimmedTask = newTask.trim()

    if (trimmedTask === '') {
      return
    }

    const task = {
      id: Date.now(),
      title: trimmedTask,
      completed: false
    }

    setTasks([...tasks, task])
    setNewTask('')
  }

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }

  return (
    <div className="app">
      <h1>Список задач</h1>

      <div className="todo-form">
        <input
          type="text"
          placeholder="Введіть нову задачу"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Додати</button>
      </div>

      <TodoList tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App