import React from 'react'
import { useState, useEffect } from 'react'
import apiServices from '../../services/apiService'

const TaskForm = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')

  // useEffect(() => {
  //   console.log(title)
  //   console.log(description)
  // }, [title, description])

  const handleSubmit = () => {
    apiServices.post('save-task', {
      title,
      description
    }).then(() => {
      setTitle('')
      setDescription('')
    })
  }

  return (
    <div className="flex flex-col gap-3">
        <input 
            value={title}
            onChange={(event) => {
              setTitle(event.target.value)
            }}
            type="text" 
            placeholder="Title" 
            className="input input-bordered w-full" 
        />
        <textarea 
            value={description}
            onChange={(event) => {
              setDescription(event.target.value)
            }}
            className="textarea textarea-bordered min-h-53" 
            placeholder="Description"
        >
        </textarea>
        <button 
            className="btn btn-outline btn-secondary"
            onClick={handleSubmit}
        >Save Task</button>
    </div>
  )
}

export default TaskForm