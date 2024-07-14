import React from 'react'
import { useTaskContext } from '../../context/taskConext'
import { truncateTaxt } from '../../utils/string';
import apiService from '../../services/apiService';

const TaskList = () => {

    const { taskList, updateContextData } = useTaskContext();

    const markAsDone = (id) => {
        apiService.put('mark-as-done/' + id).then(() => {
            updateContextData()
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const deleteTask = (id) => {
        apiService.delete('delete-task/' + id).then(() => {
            updateContextData()
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const renderList = (task) => {
        const {title, id, description} = task
        
        return(
            <div 
                className="rounded-xl bg-base-100/60 p-6"
                key={id}
                >
                <div className="flex justify-between">
                    <div>
                        <div className="text-xl">{title}</div> 
                        <div className="text-sm">{truncateTaxt(description)}</div>           
                    </div>
                    <div>
                        <ul>
                            <li>
                                <div className="tooltip" data-tip="Mark as done"></div>
                                <svg
                                    onClick={() => markAsDone(id)} 
                                    width={15} 
                                    height={15} 
                                    className="stroke-current"
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path d="m9 11 3 3L22 4" />
                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                </svg>
                            </li>

                            <li>
                                <div className="tooltip" data-tip="Delete"></div>
                                <svg
                                    onClick={() => deleteTask(id)} 
                                    width={15} 
                                    height={15} 
                                    stroke="currentColor" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                <path d="M3 6h18" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            </svg>
                            </li>

                            
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="card bg-slate-600">
            <div className="card-body">
                <h2 className=
                    "card-title text-gray-300 text-3xl">Your Task</h2>
                <p className=
                    "text-gray-300/60 text-sm">If a dog chews shoes whose shoes does he choose?</p>
                
                <div className="flex flex-col gap-3 mt-5 max-h-[25rem] overflow-y-auto px-5">
                    {taskList.map(renderList)}
                </div>

            </div>
        </div>
    )
}

export default TaskList