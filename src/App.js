import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Main from "./pages/Main";
import "./style/global.css";

class App extends Component {
  isVerification = (component) => {
    if (localStorage.getItem("token-test")) {
      return component;
    } else return <Redirect to="/" />;
  };

  render() {
    const token = localStorage.getItem("token-test");
    return (
      <Router>
        <>
          <Route
            path="/"
            exact
            render={props => {
              console.log(token);
              if (token) {
                return <Redirect to="/main" />;
              } else return <LogIn {...props} />;
            }}
          />
          <Route
            path="/main"
            render={props => this.isVerification(<Main {...props} />)}
          />
        </>
      </Router>
    );
  }
}

export default App;
