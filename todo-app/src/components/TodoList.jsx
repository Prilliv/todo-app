import TodoItem from './TodoItem'

function TodoList({ tasks, onDelete }) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TodoList