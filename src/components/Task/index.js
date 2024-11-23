import { Link } from "react-router-dom"
import "./index.css"

const Task =props=>{
    const {todoDetails, deleteTask}=props
    const {id, title, description, dueDate, status}=todoDetails

    const onClickDelete = () => {
        deleteTask(id)
    }

    return(
        <li className="task-li">
            <div className="task-top-container">
                <h1 className="task-h1">Title: {title}</h1>
                <p className="task-p">Description: {description}</p>
                <p className="task-p">Due Date: {dueDate}</p>
                <p className="task-p">Status: {status}</p>
            </div>
            <div className="task-button-container">
                <Link to={`/edit/${id}`} className="task-edit-link">
                    <button type="button" className="task-edit-btn">
                        Edit
                    </button>
                </Link>
                <button className="task-delete-btn" onClick={onClickDelete}>Delete</button>
            </div>
        </li>
    )
}

export default Task