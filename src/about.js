import React from "react";
import { MemoryRouter as Router, Link, Route, Switch } from "react-router-dom";
import Karan from "./karan";
import Jack from "./jack";

function about() {
  return (
    <div>
      <Router>
        <h1>About Page</h1>
        <Link to="/about/karan"> About Karan </Link>
        <Link to="/about/jack"> About Jack </Link>
        <Switch>
          <Route path="/about/jack" component={Jack}></Route>
          <Route path="/about/karan" component={Karan}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default about;
