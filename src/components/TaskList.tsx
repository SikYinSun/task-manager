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
    <div className="w-96">
      <table className="min-w-full text-center text-sm font-light">
        <thead>
          <tr>
            <th>Title</th>
            <th>Due Date</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.dueDate.toLocaleDateString()}</td>
              <td>{task.category}</td>
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