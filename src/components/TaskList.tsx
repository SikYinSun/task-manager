import {Task} from "../Task";

interface TaskListProps {
  tasks : Task[],
  onDelete: (id: number) => void;
}

const TaskList = ({tasks, onDelete} : TaskListProps) => {
  
  if(tasks.length === 0) {
    return <p>No tasks yet.</p>;
  };

  return (
    <div className="relative overflow-x-auto shadow-md pt-5 sm:rounded-lg">
      <table className="w-full text-sm text-center text-black-100 dark:text-blue-100">
        <thead className="text-xs text-black uppercase bg-slate-300 dark:text-white">
          <tr>
            <th className="px-3 py-1">Title</th>
            <th className="px-3 py-1">Due Date</th>
            <th className="px-3 py-1">Category</th>
            <th className="px-3 py-1">Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="bg-slate-500 border-b border-blue-400">
              <td className="px-6 py-3 text-gray-200">{task.title}</td>
              <td className="px-6 py-3 text-gray-200">{task.dueDate.toLocaleDateString()}</td>
              <td className="px-6 py-3 text-gray-200">{task.category}</td>
              <td>
                <button onClick={() => onDelete(task.id)} 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                  Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList