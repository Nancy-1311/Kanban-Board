import { useDroppable } from "@dnd-kit/core";

export default function Column({ title, count, color, children }) {
  const { setNodeRef } = useDroppable({ id: title });

  return (
    <div
      ref={setNodeRef}
      className={`bg- border-2-4 ${color} 
                   rounded-lg p-10 text-black shadow-md shadow-gray-900`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-black mx-auto bg-black text-white p-4 rounded-full">
          {title}
        </h2>
        <span className="text-sm text-slate-400">
          {count}
        </span>
      </div>

      {/* Tasks */}
      <div className="space-y-3">
        {children.length > 0 ? (
          children
        ) : (
          <p className="text-slate-500 text-sm text-center">
            No tasks
          </p>
        )}
      </div>
    </div>
  );
}
