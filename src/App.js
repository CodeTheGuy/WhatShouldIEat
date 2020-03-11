import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
import GoogleLogin from "react-google-login";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "./components/NavBar";
import StartQuiz from "./components/StartQuiz";
import Quiz from "./components/Quiz";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Search from "./components/Search";
import Account from "./components/Account";
import About from "./components/About";
import * as ROUTES from "./constants/routes";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Redirect exact from="/" to="/home" />
          <Navbar />
          <hr />
          <Route path={ROUTES.STARTQUIZ} component={StartQuiz} />
          <Route path={ROUTES.QUIZ} component={Quiz} />
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
          <Route path={ROUTES.SEARCH} component={Search} />
          <Route path={ROUTES.ACCOUNT} component={Account} />
          <Route path={ROUTES.ABOUT} component={About} />
        </div>
      </Router>
    </div>
  );
};

export default App;
