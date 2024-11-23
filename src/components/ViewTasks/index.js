import { useState, useEffect } from "react";
import Header from '../Header'
import Task from '../Task'
import './index.css'

const ViewTasks=()=>{
    const [taskData, setTaskData]=useState([])

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('taskList') || "[]")
        if (items) {
         setTaskData(items);
        }
    }, []);

    const deleteTask = id => {
        const updatedTaskList = taskData.filter(eachTodo => eachTodo.id !== id)
        localStorage.setItem('taskList', JSON.stringify(updatedTaskList))
        setTaskData(updatedTaskList)
      }

    return(
        <div className="view-container">
            <Header />
            {taskData.length!==0 && (
                <ul className="view-ul">
                    {taskData.map(eachTodo => (
                        <Task
                            key={eachTodo.id}
                            todoDetails={eachTodo}
                            deleteTask={deleteTask}
                        />
                    ))}
                </ul>
            )}
            {taskData.length===0 && <h1 className="view-h1">No Tasks to View. <br /> Please Click on Add Task to add a new task.</h1>}
        </div>
    )
}

export default ViewTasks