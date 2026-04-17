import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

const API_URL = "http://localhost:3000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setError("");
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Не вдалося завантажити задачі");
      }

      const data = await response.json();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const addTask = async () => {
    const trimmedTask = newTask.trim();

    if (!trimmedTask) return;

    try {
      setError("");
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: trimmedTask }),
      });

      if (!response.ok) {
        throw new Error("Не вдалося додати задачу");
      }

      const createdTask = await response.json();
      setTasks((prev) => [...prev, createdTask]);
      setNewTask("");
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      setError("");
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Не вдалося видалити задачу");
      }

      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditingTitle(task.title);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingTitle("");
  };

  const saveEdit = async (id) => {
    const trimmedTitle = editingTitle.trim();

    if (!trimmedTitle) return;

    try {
      setError("");
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: trimmedTitle }),
      });

      if (!response.ok) {
        throw new Error("Не вдалося оновити задачу");
      }

      const updatedTask = await response.json();

      setTasks((prev) =>
        prev.map((task) => (task.id === id ? updatedTask : task))
      );

      cancelEdit();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h1>Список задач</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Введіть нову задачу"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ flex: 1, padding: "10px" }}
        />
        <button onClick={addTask}>Додати</button>
      </div>

      <TodoList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={startEdit}
        editingId={editingId}
        editingTitle={editingTitle}
        setEditingTitle={setEditingTitle}
        onSave={saveEdit}
        onCancel={cancelEdit}
      />
    </div>
  );
}

export default App;