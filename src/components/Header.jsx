export default function Header({ onAdd }) {
  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-black mt-5">Kanban Board</h1>
        <p className="text-black">
          Manage tasks efficiently
        </p>

        <button
          onClick={onAdd}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
        >
          Add New Task
        </button>
      </div>
    </div>
  );
}
