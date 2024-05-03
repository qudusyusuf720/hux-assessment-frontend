import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
          
          <Link className="navbar-brand" to={'/homepage'}>Homepage</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link className="nav-link" to={'/sign-in'}>Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to={'/sign-up'}>Sign up</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <switch>
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/homepage" component={Homepage} />
            </switch>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App