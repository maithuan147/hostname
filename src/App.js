import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
// import { history } from "./utils/History";

export default function App() {
  return (
    <>
      <Router>
        {" "}
        <Switch>
          <Route exact path="/hostname" component={Page1} />
          <Route path="/hostname/page2" component={Page2} />
          <Route path="/hostname/page3" component={Page3} />
        </Switch>
        <Link to="/">Page1</Link> <Link to="/page2">page2</Link>{" "}
        <Link to="/page3">page3</Link>
      </Router>{" "}

    </>
  );
}
