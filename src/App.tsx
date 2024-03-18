import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/" exact component={LoginComponent} />
        <Route path="/SignUp" component={SignUpComponent} />
        </Switch>
      </div>
    </Router>
  );
}

// Define components to be used in routes
const LoginComponent: React.FC<RouteProps> = (props) => {
  return <Login />;
};

const SignUpComponent: React.FC<RouteProps> = (props) => {
  return <SignUp />;
};

export default App;

