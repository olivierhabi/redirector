import React from "react";
import ReactDOM from "react-dom";
import queryString from "query-string";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

const App = () => {
  let { search } = useLocation();

  const { url } = queryString.parse(search);

  return (
    <Switch>
      <Route path="/" render={() => (window.location = url)} />
    </Switch>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
