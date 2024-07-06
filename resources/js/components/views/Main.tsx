import React from 'react'
import TaskForm from './forms/TaskForm'

const Main = () => {
  return (
    <div className="m-48">
        <div className="flex gap-20 justify-evenly">
            <div className="w-6/12">
                <div className="mb-4">
                    <div className="text-4xl font-semibold tracking-wider text-gray-300 mb-1">
                        Hi John
                    </div>
                    <div className="text-sm tracking-wider leading-5 text-gray-300/50 font-lighter">
                        Welcome to the workplace, We miss you
                    </div>
                </div>
                <TaskForm />
            </div>
            <div className="w-6/12">task list here</div>
        </div>
    </div>
  )
}

export default Main
