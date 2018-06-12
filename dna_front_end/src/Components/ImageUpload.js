import React from "react";
import Dropzone from "react-dropzone";
import { Button } from "@blueprintjs/core";

class ImageUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      accepted: []
    };
  }

  handleSubmit = () => {
    console.log("log accepted item on submit", this.state.accepted[0]);
    fetch("http://localhost:3000/api/v1/parsedid", {
      method: "post",
      body: JSON.stringify(this.state.accepted[0]),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(console.log);
  };

  render() {
    console.log("render", this.state);

    return (
      <div>
        <div className="dropzone-grid">
          <div className="dropzone">
            <Dropzone
              style={{
                border: "5px #394B57 dashed",
                height: "200px"
              }}
              accept="text/plain"
              onDrop={accepted => {
                this.setState({ accepted });
              }}
            >
              <div style={{ width: "75%", margin: "auto", padding: "30px" }}>
                <h4 style={{ color: "#394B57" }}>
                  Drop files here, or click to select files to upload.
                </h4>
                <h4 style={{ color: "#394B57" }}>
                  Only *.txt files will be accepted
                </h4>
              </div>
            </Dropzone>
            <br />
            <br />
            <Button
              onClick={this.handleSubmit}
              className="pt-large"
              icon="upload"
              text="Upload"
            />
          </div>
        </div>
        {this.state.accepted.length > 0 ? (
          <aside>
            <h2 style={{ color: "#394B57" }}>Accepted files</h2>
            <ul>
              {this.state.accepted.map(f => (
                <li key={f.name} style={{ color: "#394B57" }}>
                  {f.name} - {f.size} bytes
                </li>
              ))}
            </ul>
          </aside>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default ImageUpload;
