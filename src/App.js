import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import React from 'react'
const App = () => {
  const[showAddTask, setShowAddTask] = useState(false)
  
  const[tasks, setTasks] = useState([])
//dfdfddfdfef
    //Add Task
    const addTask = (task) => {
      console.log(task)
    }

    //Delete Task
    const deleteTask = (id) => {
      console.log('delete', id)
      setTasks(tasks.filter((task)=>task.id !==id) )
    }

    const toggleReminder = (id) => {
      //console.log(id)
       setTasks(tasks.map((task) => 
           task.id===id ? {... task, reminder: 
             !task.reminder} : task))
    }
  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd = {addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} /> 
       ): (
        'No Tasks to Show'
      )}
    </div>
  )
}

export default App;
