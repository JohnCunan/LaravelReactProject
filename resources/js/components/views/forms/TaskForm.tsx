import React from 'react'

const TaskForm = () => {
  return (
    <div className="flex flex-col gap-3">
        <input 
            type="text" 
            placeholder="Title" 
            className="input input-bordered w-full" 
        />
        <textarea 
            className="textarea textarea-bordered min-h-53" 
            placeholder="Description"
        >
        </textarea>
        <button 
            className="btn btn-outline btn-secondary"
        >Save Task</button>
    </div>
  )
}

export default TaskForm