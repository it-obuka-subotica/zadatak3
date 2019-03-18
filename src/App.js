import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
//import Countries from './components/Countries'
import Countries from './components/CountriesJson'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to react router</h2>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-right">
            <ul className='navbar-nav mr-auto'>
              <li><Link to={'/'} className='nav-link'>Home</Link></li>
              <li><Link to={'/about'} className='nav-link'>About</Link></li>
              <li><Link to={'/countries'} className='nav-link'>Countries</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/countries' component={Countries} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
