import React, { Component } from "react";
import IDContainer from "./Components/IDContainer";
import ImageUpload from "./Components/ImageUpload";
import Nav from "./Components/Nav";
import Home from "./Components/Home";

import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App pt-dark">
        <Nav />
        <Switch>
          <Route path="/results" component={IDContainer} />
          <Route path="/upload" component={ImageUpload} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
