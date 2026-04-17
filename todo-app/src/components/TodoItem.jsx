function TodoItem({
  task,
  onDelete,
  onEdit,
  editingId,
  editingTitle,
  setEditingTitle,
  onSave,
  onCancel,
}) {
  const isEditing = editingId === task.id;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editingTitle}
            onChange={(e) => setEditingTitle(e.target.value)}
            style={{ flex: 1, padding: "8px" }}
          />
          <button onClick={() => onSave(task.id)}>Зберегти</button>
          <button onClick={onCancel}>Скасувати</button>
        </>
      ) : (
        <>
          <span style={{ flex: 1 }}>{task.title}</span>
          <button onClick={() => onEdit(task)}>Редагувати</button>
          <button onClick={() => onDelete(task.id)}>Видалити</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;