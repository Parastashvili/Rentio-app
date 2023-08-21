import React from "react";
import Home from "./Home";
import Terms from "./Terms";
import Contact from "./Contact";
import Product from "./Product";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tools" exact component={Product} />
        <Route path="/tools/:subcategory" component={Product} />
        <Route path="/home-garden" exact component={Product} />
        <Route path="/home-garden/:subcategory" component={Product} />
        <Route path="/cars" exact component={Product} />
        <Route path="/cars/:subcategory" component={Product} />
        <Route path="/terms" component={Terms} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}
