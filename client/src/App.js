import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";

import "./App.scss";

function App() {
  return (
    <div >
      <Header />
      <Router>
      <Nav>
      
      </Nav>
      </Router>
    </div>
  );
}


export default App;
