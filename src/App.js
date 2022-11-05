import React, { Component } from "react";
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/Contact" component={Contact} />
            <Route path="/About" component={About} />
          </Routes>
        </>
      </Router>
    );
  }
}
export default App;
