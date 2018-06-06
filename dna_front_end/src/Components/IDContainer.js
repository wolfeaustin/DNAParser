import React from "react";
import IDElement from "./IDElement";
import IDShow from "./IDShow";
import "../Grid.css";

class IDContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      rsids: [],
      rsidInfo: [],
      selectedID: {}
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
    fetch("http://localhost:3000/api/v1/parsedid")
      .then(r => r.json())
      .then(data =>
        this.setState({
          rsids: data
        })
      );
  }

  handleClick = id => {
    console.log(id);
    this.setState({
      selectedID: this.state.rsids.find(r => r.rsid === id)
    });
    console.log(this.state);
  };

  render() {
    console.log(this.state);
    return (
      <div className="Container">
        <div className="Container-Column">
          {this.state.rsidInfo.map(r => (
            <IDElement
              onClick={this.handleClick}
              key={r.id}
              id={r.name}
              description={r.description}
            />
          ))}
        </div>
        <div className="Container-Column">
          <IDShow
            key={this.state.selectedID.id}
            rsid={this.state.selectedID.rsid}
            chromosome={this.state.selectedID.chromosome}
            position={this.state.selectedID.position}
            genotype={this.state.selectedID.genotype}
          />
        </div>
      </div>
    );
  }
}

export default IDContainer;
