import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      Day: 'Feb 25th at 3:00px',
      reminder: true,
    },
    {
      id: 2,
      text: 'Doctors Appointment',
      Day: 'Feb 25th at 3:00px',
      reminder: true,
    },
    {
      id: 3,
      text: 'Doctors Appointment',
      Day: 'Feb 25th at 3:00px',
      reminder: false,
    },
  ])
  
  return (
    <div className="container">
    <Header />
    <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
