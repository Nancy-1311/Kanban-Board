import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function TaskCard({ task, onEdit, onDelete }) {
  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({ id: task.id });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white p-6 rounded shadow-xl text-black cursor-pointer hover:shadow hover:shadow-gray-500 "
     >
      {/* Drag handle + Title */}
      <div
        {...listeners}
        {...attributes}
        className="cursor-move font-semibold"
      >
        {task.title}
      </div>

      {/* Description */}
      {task.description && (
        <p className="text-md text-black mt-1">
          {task.description}
        </p>
      )}

      {/* Priority */}
      {task.priority && (
        <p className="text-md mt-4 text-black">
          <span className="font-medium">Priority:</span>{" "}
          {task.priority}
        </p>
      )}

      {/* Tags */}
      {task.tags && task.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-1">
          {task.tags.map((tag, index) => (
            <span
              key={index}
              className="text-md bg-blue-100 text-blue-700 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Deadline */}
      {task.deadline && (
        <p className="text-md text-black mt-4">
          📅 {task.deadline}
        </p>
      )}

      {/* Actions */}
      <div className="flex justify-end gap-3 text-md mt-2">
        <button onClick={onEdit} className="text-blue-600">
          Edit
        </button>
        <button onClick={onDelete} className="text-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}
