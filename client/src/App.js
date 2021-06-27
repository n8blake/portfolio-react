import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import "./App.scss";

function App(props) {
  return (
    <span >
      <Header />
      <Router>
        <Nav />
        <main className="container">
        <Switch>
          <Route exact path={["/", "/about"]}>
            <About />
          </Route>
          <Route exact path={["/projects"]}>
            <Projects />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        </main>
      </Router>
      <Footer />
    </span>
  );
}


export default App;
