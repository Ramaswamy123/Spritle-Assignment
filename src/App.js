// import {React} from "react"
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Student from './components/Student'
import Master from './components/Master'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/student" component={Student} />
      <Route exact path="/master" component={Master} />
    </Switch>
  </div>
)

export default App
