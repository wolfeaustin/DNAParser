import React from "react";
import Dropzone from "react-dropzone";
import { Button } from "@blueprintjs/core";
import { Dimmer, Loader, Modal, Header, Icon } from "semantic-ui-react";

class ImageUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      accepted: [],
      rsidInfo: [],
      idsToParse: [],
      loading: false,
      lines: 0,
      matches: 0,
      showModal: false,
      text: ""
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

  goToReport = () => {
    this.props.history.push("/results");
  };

  handleSubmit = () => {
    console.log("log accepted item on submit", this.state.accepted[0].preview);
    this.setState(this.setState({ loading: true }));
    fetch(this.state.accepted[0].preview)
      .then(r => r.text())
      .then(t =>
        fetch("http://localhost:3000/api/v1/parsedid", {
          method: "post",
          body: JSON.stringify(t),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
      )
      .then(response => response.json())
      .then(times => {
        console.log("now you can view the report", times);
        this.setState(
          this.setState({
            loading: false,
            matches: times.matches,
            lines: times.lines,
            showModal: true
          })
        );
      });
  };

  render() {
    return (
      <div>
        <Modal open={this.state.showModal} basic size="small">
          <Header icon="archive" content="Your DNA report is ready" />
          <Modal.Content scrolling>
            <p>Total Lines Analyzed: {this.state.lines}</p>
            <p>Total RSID matches: {this.state.matches}</p>
            <Modal.Description>
              <p>{this.state.text}</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted onClick={this.goToReport}>
              <Icon name="checkmark" /> View Report
            </Button>
          </Modal.Actions>
        </Modal>

        <Dimmer active={this.state.loading}>
          <Loader size="massive">Analzing DNA...</Loader>
        </Dimmer>
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
