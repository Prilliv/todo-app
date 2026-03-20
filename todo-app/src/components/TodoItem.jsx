function TodoItem({ title, completed }) {
  return (
    <div className="todo-item">
      <span>{title}</span>
      <span>{completed ? '✔️ Виконано' : '❌ Не виконано'}</span>
    </div>
  )
}

export default TodoItem