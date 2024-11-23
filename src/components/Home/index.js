import Header from '../Header'
import './index.css'

const Home= ()=>{
    return(
        <div className="home-container">
            <Header />
            <h1 className="home-h1">To Add a task click on Add Task on Header.<br />To View the Tasks click on View Tasks on Header.</h1>
        </div>
    )
}

export default Home