import { useState } from 'react'
import './App.css'

interface Task {
  id : number;
  title : string;
  dueDate : Date;
  category : string;
}

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([])
  return (
    <>
      
    </>
  )
}

export default App
