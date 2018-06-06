import React from "react";
import Dropzone from "react-dropzone";

class ImageUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      accepted: []
    };
  }

  handleSubmit = () => {
    console.log(this.state.accepted[0]);
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
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            accept="text/plain"
            onDrop={accepted => {
              this.setState({ accepted });
            }}
          >
            <p>Drop files here, or click to select files to upload.</p>
            <p>Only *.txt files will be accepted</p>
          </Dropzone>
          <button onClick={this.handleSubmit}>Upload</button>
        </div>
        <aside>
          <h2>Accepted files</h2>
          <ul>
            {this.state.accepted.map(f => (
              <li key={f.name}>
                {f.name} - {f.size} bytes
              </li>
            ))}
          </ul>
        </aside>
      </section>
    );
  }
}

export default ImageUpload;
