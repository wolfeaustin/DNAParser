import React, { Component } from "react";
import IDContainer from "./Components/IDContainer";
import ImageUpload from "./Components/ImageUpload";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Login from "./Components/Login";
import User from "./Components/User";
import Signup from "./Components/Signup";
import AddArticle from "./Components/AddArticle";

import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      uploaded: false
    };
  }

  handleUploaded = e => {
    this.setState({ uploaded: true });
  };

  render() {
    return (
      <div className="App pt-dark">
        <Nav uploaded={this.state.uploaded} />
        <Switch>
          <Route path="/results" component={IDContainer} />
          <Route
            path="/upload"
            render={e => (
              <ImageUpload history={e} uploaded={this.handleUploaded} />
            )}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/addarticle" component={AddArticle} />
          <Route path="/user" component={User} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
