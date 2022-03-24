import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState(
    [
      {
          id: 1,
          text: 'Doctors Appointment',
          day: 'April 1st at 2:00pm',
          reminder: true
      },
      {
          id: 2,
          text: 'CPSC 471 Homework 5',
          day: 'April 3rd at 11:59pm',
          reminder: true
      },
      {
          id: 3,
          text: 'SENG 438 Exam',
          day: 'April 28th at 10:00am',
          reminder: true
      }
    ]
  ) 

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
    ? { ...task, reminder: !task.reminder } : task))
  }

  return (
      <div className="container">
        <Header />
        {tasks.length > 0 ? 
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
          : 'No Tasks'
        }
      </div>
  );
}

export default App;
