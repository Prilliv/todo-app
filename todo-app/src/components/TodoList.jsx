import TodoItem from "./TodoItem";

function TodoList({
  tasks,
  onDelete,
  onEdit,
  editingId,
  editingTitle,
  setEditingTitle,
  onSave,
  onCancel,
}) {
  if (tasks.length === 0) {
    return <p>Список задач порожній.</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
          editingId={editingId}
          editingTitle={editingTitle}
          setEditingTitle={setEditingTitle}
          onSave={onSave}
          onCancel={onCancel}
        />
      ))}
    </div>
  );
}

export default TodoList;