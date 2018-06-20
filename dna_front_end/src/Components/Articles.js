import React from "react";
import { Card } from "semantic-ui-react";

class Articles extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    //fetch articles
  }
  render() {
    console.log("articles", this.props);
    //show the articles in some way.  Card???
    return (
      <div>
        {this.props.articles.length > 0 ? (
          <div>
            <div className="Article">
              <h4>Articles</h4>
              <Card.Group centered>
                {this.props.articles.map(a => (
                  <Card
                    target="_blank"
                    href={a.url}
                    description={a.description}
                  />
                ))}
              </Card.Group>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Articles;
