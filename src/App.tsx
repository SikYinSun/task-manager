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
  // const [tasks, setTasks] = useState<Task[]>([])
  const [tasks, setTasks] = useState<Task[]>([{
      id: 1,
      title: "abc",
      dueDate: new Date("2023-07-09"),
      category: "Work",
  }]);

  return (
    <>
      <TaskForm />
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App
