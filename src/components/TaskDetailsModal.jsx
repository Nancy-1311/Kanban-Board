import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function TaskDetailsModal({ task, onClose }) {
  const { updateTask } = useTasks();

  const [form, setForm] = useState({
    title: task.title || "",
    description: task.description || "",
    status: task.status || "To Do",
    priority: task.priority || "Medium",
    tags: Array.isArray(task.tags) ? task.tags.join(", ") : "",
    deadline: task.deadline || "",
  });

  const save = () => {
    updateTask(task.id, {
      title: form.title,
      description: form.description,
      status: form.status,
      priority: form.priority,
      tags: form.tags
        ? form.tags.split(",").map(t => t.trim())
        : [],
      deadline: form.deadline,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center text-black">
      <div className="bg-white p-6 rounded w-[420px]">
        <h2 className="font-semibold mb-4">Edit Task</h2>

        {/* Title */}
        <input
          className="border p-2 w-full mb-3"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        {/* Description */}
        <textarea
          className="border p-2 w-full mb-3"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        {/* Status & Priority */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <select
            className="border p-2"
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
          >
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>

          <select
            className="border p-2"
            value={form.priority}
            onChange={(e) =>
              setForm({ ...form, priority: e.target.value })
            }
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        {/* Tags */}
        <input
          className="border p-2 w-full mb-3"
          value={form.tags}
          placeholder="Tags (comma separated)"
          onChange={(e) =>
            setForm({ ...form, tags: e.target.value })
          }
        />

        {/* Deadline */}
        <input
          type="date"
          className="border p-2 w-full mb-4"
          value={form.deadline}
          onChange={(e) =>
            setForm({ ...form, deadline: e.target.value })
          }
        />

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={save}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
