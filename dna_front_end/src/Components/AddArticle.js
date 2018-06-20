import React from "react";
import {
  Input,
  Dropdown,
  Button,
  Form,
  Segment,
  Container,
  Header
} from "semantic-ui-react";

class AddArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      rsids: [],
      selectedID: "",
      description: "",
      url: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/rsidinfo")
      .then(r => r.json())
      .then(data =>
        this.setState({
          rsids: data
        })
      );
  }

  handleSubmit = () => {
    fetch("http://localhost:3000/api/v1/article", {
      method: "post",
      body: JSON.stringify({
        rsid: this.state.selectedID,
        description: this.state.description,
        url: this.state.url
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  };

  handleRSID = e => {
    this.setState({
      selectedID: e.target.innerText
    });
  };
  handleDescription = e => {
    this.setState({
      description: e.target.value
    });
  };
  handleURL = e => {
    this.setState({
      url: e.target.value
    });
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
              content="Found an Interesting Article?"
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
              content="Use the form below to add an interesting article that you have found for one of our RSIDs"
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
        <div
          style={{
            color: "black",
            width: "500px",
            marginRight: "auto",
            marginLeft: "auto",
            padding: "50px"
          }}
        >
          <h1 style={{ color: "black" }}>Add Article</h1>
          <div>
            <p>RSID</p>
            {this.state.rsids !== [] ? (
              <Dropdown
                placeholder="Select RSID"
                fluid
                search
                selection
                onChange={this.handleRSID}
                options={this.state.rsids.map(function(e) {
                  return {
                    value: e.name,
                    text: e.name
                  };
                })}
              />
            ) : (
              <div>next</div>
            )}
          </div>
          <div>
            <p>Description</p>
            <Input
              fluid
              placeholder="Description"
              onChange={this.handleDescription}
            />
          </div>
          <div>
            <p>Article URL</p>
            <Input
              fluid
              label="http://"
              placeholder="article.com"
              onChange={this.handleURL}
            />
          </div>
          <br />
          <Button onClick={this.handleSubmit}>Submit Article</Button>
        </div>
      </div>
    );
  }
}

export default AddArticle;
