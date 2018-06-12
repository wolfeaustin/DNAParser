import React from "react";
import IDElement from "./IDElement";
import IDShow from "./IDShow";
import "../Grid.css";
import { Menu } from "@blueprintjs/core";

class IDContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      rsids: [],
      rsidInfo: [],
      selectedID: {},
      selectedInfo: {}
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

  handleClick = info => {
    this.setState({
      selectedID: this.state.rsids.find(r => r.rsid === info.name),
      selectedInfo: info
    });
  };

  render() {
    return (
      <div className="Container">
        <div className="Container-Column-Selector">
          <Menu>
            {this.state.rsidInfo.map(r => (
              <IDElement
                onClick={this.handleClick}
                key={r.id}
                info={r}
                description={r.description}
              />
            ))}
          </Menu>
        </div>

        <div className="Container-Column-Show">
          <IDShow
            key={this.state.selectedID.id}
            rsid={this.state.selectedID.rsid}
            info={this.state.selectedInfo}
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
