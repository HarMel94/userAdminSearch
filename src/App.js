import './App.css'

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Admin from './Admin'
import User from './User'
import Input from './Input'

export default function App() {


  return(
    <Router>
      <div className = 'App'>

      <Switch>
        <Route exact path='/' component={Input}/>
        <Route path = '/admin' component={Admin}/>
        <Route path = '/user' component={User} />
      </Switch>
      
      </div>
    </Router>
  )
}
