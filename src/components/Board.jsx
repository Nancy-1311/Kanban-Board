import { DndContext } from "@dnd-kit/core";
import { useTasks } from "../context/TaskContext";
import Column from "./Column";
import TaskCard from "./TaskCard";

export default function Board({ onEditTask }) {
  const { tasks, updateTask, deleteTask } = useTasks();

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    updateTask(active.id, { status: over.id });
  };

  const todo = tasks.filter((t) => t.status === "To Do");
  const inProgress = tasks.filter((t) => t.status === "In Progress");
  const done = tasks.filter((t) => t.status === "Done");

  /**
   * 🎨 COLUMN COLOR CONFIGURATION
   * Change colors ONLY here if needed
   */
  const columnStyles = {
    "To Do": "bg-sky-200 text-black",
    "In Progress": "bg-amber-200",
    "Done": "bg-green-200",
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="max-w-7xl mx-auto p-12 text-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Column
            title="To Do"
            count={todo.length}
            color={columnStyles["To Do"]}
          >
            {todo.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={() => onEditTask(task)}
                onDelete={() => deleteTask(task.id)}
              />
            ))}
          </Column>

          <Column
            title="In Progress"
            count={inProgress.length}
            color={columnStyles["In Progress"]}
          >
            {inProgress.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={() => onEditTask(task)}
                onDelete={() => deleteTask(task.id)}
              />
            ))}
          </Column>

          <Column
            title="Done"
            count={done.length}
            color={columnStyles["Done"]}
          >
            {done.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={() => onEditTask(task)}
                onDelete={() => deleteTask(task.id)}
              />
            ))}
          </Column>
        </div>
      </div>
    </DndContext>
  );
}
