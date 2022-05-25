import {useState, useEffect} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import React from 'react'
const App = () => {
  const[showAddTask, setShowAddTask] = useState(false)
  
  const[tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  //fetch data
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    console.log(data)

    return data
  }
//dfdfddfdfef
    //Add Task
    const addTask = (task) => {
      console.log(task)
    }

    //Delete Task
    const deleteTask = async (id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
      })
      //console.log('delete', id)
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
