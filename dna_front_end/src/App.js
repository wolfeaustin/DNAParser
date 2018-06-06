import React, { Component } from "react";
import IDContainer from "./Components/IDContainer";
import ImageUpload from "./Components/ImageUpload";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageUpload />
        <IDContainer />
      </div>
    );
  }
}

export default App;
