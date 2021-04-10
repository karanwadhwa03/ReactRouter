import React from "react";
import { BrowserRouter as Router, Route, Switch ,Link } from "react-router-dom";
import Home from "./home.js";
import About from "./about.js";

function App() {
  return (
    <Router basename="/"> 
      <Link to='/' style={{margin:'40px'}}>Home</Link>
      <Link to='/about'>About</Link>

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </Router>
  );
}

export default App;
