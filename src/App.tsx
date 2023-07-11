import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

interface Task {
  id : number;
  title : string;
  dueDate : Date;
  category : string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const handleAddtask = (task : Omit<Task ,"id">) => {
    const newTask : Task = {
      id: tasks.length +1,
      title: task.title,
      dueDate: new Date(task.dueDate),
      category: task.category,
    };

    newTask.dueDate.setHours(24);
    setTasks([...tasks, newTask]);
  }

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <>
      <TaskForm onSumbit={handleAddtask}/>
      <TaskList tasks={tasks} onDelete={handleDeleteTask}/>
    </>
  )
}

export default App
