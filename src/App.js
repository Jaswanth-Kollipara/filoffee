import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import AddTask from './components/AddTask'
import ViewTasks from './components/ViewTasks'
import EditTask from './components/EditTask'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/filoffee/" component={Home} />
    <Route exact path="/add" component={AddTask} />
    <Route exact path="/view" component={ViewTasks} />
    <Route exact path="/edit/:id" component={EditTask} />
    <Route component={NotFound} />
  </Switch>
)

export default App