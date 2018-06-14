import React from "react";
import Dropzone from "react-dropzone";
import { Button } from "@blueprintjs/core";
import { RingLoader } from "react-spinners";

class ImageUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      accepted: [],
      rsidInfo: [],
      idsToParse: [],
      loading: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/rsidinfo")
      .then(r => r.json())
      .then(data =>
        this.setState({
          rsidInfo: data
        })
      );
  }

  handleSubmit = () => {
    console.log("log accepted item on submit", this.state.accepted[0].preview);
    this.setState(this.setState({ loading: true }));
    fetch(this.state.accepted[0].preview)
      .then(r => r.text())
      .then(text =>
        fetch("http://localhost:3000/api/v1/parsedid", {
          method: "post",
          body: JSON.stringify(text),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
      )
      .then(response => {
        console.log("now you can view the report");
        this.setState(this.setState({ loading: false }));
      });
  };

  render() {
    console.log("render", this.state);

    return (
      <div>
        <div className="ring">
          <RingLoader
            color={"#394B57"}
            loading={this.state.loading}
            size={400}
          />
        </div>
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
            <h2 style={{ color: "#394B57" }}>File to Upload</h2>
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
