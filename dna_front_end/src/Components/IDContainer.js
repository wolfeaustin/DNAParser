import React from "react";

class IDContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      rsids: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/parsedid")
      .then(r => r.json())
      .then(data =>
        this.setState({
          rsids: data
        })
      );
  }

  render() {
    return <div>{this.state.rsids.map(r => <p key={r.id}>{r.rsid}</p>)}</div>;
  }
}

export default IDContainer;
