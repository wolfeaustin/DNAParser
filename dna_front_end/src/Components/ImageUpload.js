import React from "react";
import Dropzone from "react-dropzone";
import { Button } from "@blueprintjs/core";
import {
  Dimmer,
  Loader,
  Modal,
  Header,
  Icon,
  Segment,
  Container
} from "semantic-ui-react";

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
    this.props.history.history.push("/results");
  };

  handleSubmit = () => {
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
        this.setState({
          loading: false,
          matches: times.matches,
          lines: times.lines,
          showModal: true
        });
      });
    this.props.uploaded();
  };

  render() {
    return (
      <div>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 300, padding: "1em 0em" }}
          vertical
        >
          <Container>
            <Header
              as="h1"
              content="Drag and Drop your file on the DropZone below"
              inverted
              style={{
                fontSize: "4em",
                fontWeight: "normal",
                marginBottom: 0,
                marginTop: ".5em"
              }}
            />
            <Header
              as="h2"
              content="Click 'Upload' and we'll take care of the rest"
              inverted
              style={{
                fontSize: "1.7em",
                fontWeight: "normal",
                marginTop: "1.5em",
                marginBottom: ".5em"
              }}
            />
          </Container>
        </Segment>
        <Modal
          open={this.state.showModal}
          onClick={this.goToReport}
          basic
          size="small"
        >
          <Header icon="archive" content="Your DNA report is ready" />
          <Modal.Content scrolling>
            <p>Total Lines Analyzed: {this.state.lines}</p>
            <p>Total RSID matches: {this.state.matches}</p>
            <Modal.Description>
              <p>{this.state.text}</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              icon="document"
              content="View Report"
              onClick={this.goToReport}
            >
              View Report
            </Button>
          </Modal.Actions>
        </Modal>

        <Dimmer active={this.state.loading}>
          <Loader size="massive">Analyzing DNA...</Loader>
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
