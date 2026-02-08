import { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import CreateTaskModal from "./components/CreateTaskModal";
import TaskDetailsModal from "./components/TaskDetailsModal";
import "./index.css";

export default function App() {
  const [showCreate, setShowCreate] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="min-h-screen">
      <Header onAdd={() => setShowCreate(true)} />
      <Board onEditTask={setEditingTask} />

      {showCreate && (
        <CreateTaskModal onClose={() => setShowCreate(false)} />
      )}

      {editingTask && (
        <TaskDetailsModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
        />
      )}
    </div>
  );
}
