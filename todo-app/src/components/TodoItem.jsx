function TodoItem({ id, title, completed, onDelete }) {
  return (
    <div className="todo-item">
      <div className="task-info">
        <span>{title}</span>
        <span className="status">
          {completed ? '✔️ Виконано' : '❌ Не виконано'}
        </span>
      </div>

      <button className="delete-btn" onClick={() => onDelete(id)}>
        Видалити
      </button>
    </div>
  )
}

export default TodoItem