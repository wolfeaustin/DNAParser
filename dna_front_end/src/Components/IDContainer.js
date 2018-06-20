import React from "react";
import IDElement from "./IDElement";
import IDShow from "./IDShow";
import Articles from "./Articles";
import "../Grid.css";
import { Menu } from "@blueprintjs/core";

class IDContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      rsids: [],
      rsidInfo: [],
      selectedID: {},
      selectedInfo: {},
      articles: []
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
    fetch("http://localhost:3000/api/v1/article")
      .then(r => r.json())
      .then(data =>
        this.setState({
          articles: data
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
    console.log(this.state);
    return (
      <div className="Container">
        <div className="Container-Column-Selector">
          <Menu>
            {this.state.rsids ? (
              <div>
                {this.state.rsidInfo
                  .filter(n =>
                    this.state.rsids.map(p => p.rsid).includes(n.name)
                  )
                  .map(r => (
                    <IDElement
                      onClick={this.handleClick}
                      key={r.id}
                      info={r}
                      description={r.description}
                      genotype={
                        this.state.rsids.find(i => i.rsid === r.name).genotype
                      }
                    />
                  ))}
              </div>
            ) : (
              <div>nada</div>
            )}
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
          <Articles
            articles={this.state.articles.filter(
              a => a.rsid === this.state.selectedID.rsid
            )}
          />
        </div>
      </div>
    );
  }
}

export default IDContainer;
//
// .sort((a, b) => {
//   if (
//     a.genotype ==
//     this.state.rsids.find(r => r.rsid == a.name).geno1var
//   ) {
//     console.log("first case", a);
//     return 1;
//   }
//   if (
//     a.genotype ==
//     this.state.rsids.find(r => r.rsid == a.name).geno2var
//   ) {
//     console.log("second case", a);
//     return 0;
//   } else if (
//     a.genotype ==
//     this.state.rsids.find(r => r.rsid == a.name).geno3var
//   ) {
//     console.log("third case", a);
//     return -1;
//   }
// })
