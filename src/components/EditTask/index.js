import {useState, useEffect} from 'react'
import Header from '../Header'
import './index.css'

const EditTask=props=>{
    const {match} = props
    const {params} = match
    const {id} = params
    const [apiStatus,setApiStatus]=useState({
        title: "",
        description: "",
        dueDate: "",
        status: "",
        titleError: false,
        descriptionError: false,
        dueDateError: false,
        statusError: false,
    })
    //contactsList: [...prevState.contactsList, newContact],

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('taskList'))
        const updatesTaskList=items.filter(eachTodo => eachTodo.id === id)
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            ...updatesTaskList[0],
        }))
    }, []);

    const onChangeTitle=event=>{
        if(event.target.value===""){
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                title: event.target.value,
                titleError: true,
            }))
        }
        else{
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                title: event.target.value,
                titleError: false
            }))
        }
    }

    const onChangeDescription=event=>{
        if(event.target.value===""){
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                description: event.target.value,
                descriptionError: true,
            }))
        }
        else{
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                description: event.target.value,
                descriptionError: false
            }))
        }
    }

    const onChangeDueDate=event=>{
        if(event.target.value===""){
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                dueDate: event.target.value,
                dueDateError: true,
            }))
        }
        else{
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                dueDate: event.target.value,
                dueDateError: false
            }))
        }
    }

    const onChangeStatus=event=>{
        if(event.target.value===""){
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                status: event.target.value,
                statusError: true,
            }))
        }
        else{
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                status: event.target.value,
                statusError: false
            }))
        }
    }

    const onBlurTitle=event=>{
        if(event.target.value===""){
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                titleError: true,
            }))
        }
        else{
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                titleError: false
            }))
        }
    }

    const onBlurDescription=event=>{
        if(event.target.value===""){
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                descriptionError: true,
            }))
        }
        else{
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                descriptionError: false
            }))
        }
    }

    const onBlurDueDate=event=>{
        if(event.target.value===""){
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                dueDateError: true,
            }))
        }
        else{
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                dueDateError: false
            }))
        }
    }

    const onBlurStatus=event=>{
        if(event.target.value===""){
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                statusError: true,
            }))
        }
        else{
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                statusError: false
            }))
        }
    }

    const renderTitle=()=>{
        const {title, titleError}=apiStatus
        return(
            <div className="add-form-inner-container">
                <label className="add-label" htmlFor="add-title">Title *:</label><br/>
                <input className="add-input" type="text" id="add-title" placeholder="Enter Title" value={title} onChange={onChangeTitle} onBlur={onBlurTitle}/>
                {titleError && <p className="add-error">*Required</p>}
            </div>
        )
    }

    const renderDescription=()=>{
        const {description, descriptionError}=apiStatus
        return(
            <div className="add-form-inner-container">
                <label className="add-label" htmlFor="add-description">Description *:</label><br/>
                <input className="add-input" type="text" id="add-description" placeholder="Enter Description" value={description} onChange={onChangeDescription} onBlur={onBlurDescription}/>
                {descriptionError && <p className="add-error">*Required</p>}
            </div>
        )
    }

    const renderDueDate=()=>{
        const {dueDate, dueDateError}=apiStatus
        return(
            <div className="add-form-inner-container">
                <label className="add-label" htmlFor="add-date">Due Date *:</label><br/>
                <input className="add-input" type="text" id="add-date" placeholder="Enter Due Date like 28/11/2024" value={dueDate} onChange={onChangeDueDate} onBlur={onBlurDueDate}/>
                {dueDateError && <p className="add-error">*Required</p>}
            </div>
        )
    }

    const renderStatus=()=>{
        const {status, statusError}=apiStatus
        return(
            <div className="add-form-inner-container">
                <label className="add-label" htmlFor="add-state">Status *:</label><br/>
                <input className="add-input" type="text" id="add-state" placeholder="Enter Status Pending/In progress/Compleated" value={status} onChange={onChangeStatus} onBlur={onBlurStatus}/>
                {statusError && <p className="add-error">*Required</p>}
            </div>
        )
    }

    
    const onSubmitTask=event=>{
        event.preventDefault()
        const {title,description,dueDate,status}=apiStatus
        if(title===""){
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                titleError: true
            }))
        }
        else if(description===""){
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                descriptionError: true
            }))
        }
        else if(dueDate===""){
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                dueDateError: true
            }))
        }
        else if(status===""){
            setApiStatus((prevApiStatus)=>({
                ...prevApiStatus,
                statusError: true
            }))
        }
        else{
            let data=JSON.parse(localStorage.getItem('taskList'))
            const taskdata={
                id,
                title,
                description,
                dueDate,
                status,
            }
            const updatedData=data.map(eachContent=>{
                if(eachContent.id===id){
                    return {...eachContent, ...taskdata}
                }
                return eachContent
            })
            localStorage.setItem('taskList', JSON.stringify(updatedData))
            const {history} = props
            history.replace("/")
        }
    }

    return(
        <div className="edit-container">
            <Header />
            <div className="edit-main-container">
                <form className="edit-form-container" onSubmit={onSubmitTask}>
                    <h1 className="edit-view-heading">Edit Information:</h1>
                    {renderTitle()}
                    {renderDescription()}
                    {renderDueDate()}
                    {renderStatus()}
                    <button className="edit-button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EditTask