import { Link } from "react-router-dom"
import "./index.css"

const Header=()=>(
    <nav className="header-nav-container">
        <ul className="header-ul">
        <li className="header-li">
                <Link to="/" className="header-link">
                    <button className="header-button">
                        Home
                    </button>
                </Link>
            </li>
            <li className="header-li">
                <Link to="/add" className="header-link">
                    <button className="header-button">
                        Add Task
                    </button>
                </Link>
            </li>
            <li className="header-li">
                <Link to="/view" className="header-link">
                    <button className="header-button">
                        View Tasks
                    </button>
                </Link>
            </li>
        </ul>
    </nav>
)

export default Header