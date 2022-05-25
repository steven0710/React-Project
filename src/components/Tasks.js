import Task from './Task'
import React from 'react'
import PropTypes from 'prop-types'
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
    <>
        {tasks.map((task,index)=>(
            <Task key = {index} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
          </>
    //react fragment
  )
}

Tasks.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,

}
export default Tasks
