import React from "react";

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    //fetch articles
  }
  render() {
    console.log(this.props);
    //show the articles in some way.  Card???
    return <div>Articles</div>;
  }
}

export default Articles;
