import TodoItem from './TodoItem'

function TodoList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          title={task.title}
          completed={task.completed}
        />
      ))}
    </div>
  )
}

export default TodoList