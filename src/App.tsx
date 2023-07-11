import { useState, useEffect } from 'react';
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

  const storedTasks = localStorage.getItem('tasks');

  const initialTasks = storedTasks ? JSON.parse(storedTasks) : [];
  console.log(initialTasks)

  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddtask = (task : Omit<Task ,"id">) => {
    const newTask : Task = {
      id: tasks.length +1,
      title: task.title,
      dueDate: new Date(task.dueDate),
      category: task.category,
    };

    newTask.dueDate.setHours(0, 0, 0, 0);
    setTasks([...tasks, newTask]);
  }

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <>
      <TaskForm onSubmit={handleAddtask}/>
      <TaskList tasks={tasks} onDelete={handleDeleteTask}/>
    </>
  )
}

export default App
