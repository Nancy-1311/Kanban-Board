import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function CreateTaskModal({ onClose }) {
  const { addTask } = useTasks();

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "To Do",
    priority: "Medium",
    tags: "",
    deadline: "",
  });

  const submit = () => {
    if (!form.title.trim()) return;

    addTask({
      id: Date.now().toString(),
      title: form.title,
      description: form.description,
      status: form.status,
      priority: form.priority,
      tags: form.tags
        ? form.tags.split(",").map(t => t.trim())
        : [],
      deadline: form.deadline,
      createdAt: new Date().toISOString(),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center text-black">
      <div className="bg-white p-6 rounded w-[420px]">
        <h2 className="font-semibold mb-4">Create Task</h2>

        {/* Title */}
        <input
          className="border border-gray-500 p-2 w-full mb-3 text-black"
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        {/* Description */}
        <textarea
          className="border border-gray-500 p-2 w-full mb-3"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        {/* Status & Priority */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <select
            className="border border-gray-500 p-2"
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
            className="border border-gray-500 p-2"
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
          className="border border-gray-500 p-2 w-full mb-3"
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={(e) =>
            setForm({ ...form, tags: e.target.value })
          }
        />

        {/* Deadline */}
        <input
          type="date"
          className="border border-gray-500 p-2 w-full mb-4"
          value={form.deadline}
          onChange={(e) =>
            setForm({ ...form, deadline: e.target.value })
          }
        />

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={submit}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
