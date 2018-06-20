import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

class Home extends React.Component {
  constructor() {
    super();
  }

  handleClick = () => {
    this.props.history.push("/upload");
  };
  render() {
    return (
      <div>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 350 }}
          vertical
        >
          <Container>
            <Header
              as="h1"
              content="Have a raw DNA file?"
              inverted
              style={{
                fontSize: "4em",
                fontWeight: "normal",
                marginBottom: 0,
                marginTop: ".75em"
              }}
            />
            <Header
              as="h2"
              content="Let us analze that for you!"
              inverted
              style={{
                fontSize: "1.7em",
                fontWeight: "normal",
                marginTop: "1.5em",
                marginBottom: "1em"
              }}
            />
            <Button primary size="huge" onClick={this.handleClick}>
              Get Started
              <Icon name="right arrow" />
            </Button>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Home;
