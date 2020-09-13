import React from 'react';
import { Route, Link, NavLink, withRouter } from 'react-router-dom';
import Search from './Search';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="main">
        <h1><Link to="/">Granite DB</Link></h1>
        <h2>A resource for Nashua</h2>
        <div className="options">
          <div>
            <b>Talk to a human</b><br/>
            <NavLink to="/contact">Contact Info</NavLink>
          </div>
          <div>
            <b>Browse the directory of resources</b><br/>
            <NavLink to="/search">Search</NavLink>
          </div>
        </div>
      </header>
      <div>
      </div>
      <Route exact path={`/search`} render={(props) => <Search {...props} />} />
      <Route exact path={`/contact`} render={(props) => <Contact {...props} />} />
    </div>
  );
}

export default withRouter(App);
