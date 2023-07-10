import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

interface Task {
  id : number;
  title : string;
  dueDate : Date;
  category : string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  return (
    <>
      <TaskForm />
    </>
  )
}

export default App
