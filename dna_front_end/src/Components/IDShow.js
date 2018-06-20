import React from "react";
import "../Grid.css";
import Variant from "./Variant";

const IDShow = props => {
  return (
    <div className="Container-Item">
      <div className="Show-Header">
        <h1>{props.info.description}</h1>
        <h2>{props.rsid}</h2>
      </div>

      <div className="Show-Left-Container">
        <p style={{ fontSize: "20px" }}>{props.info.details}</p>
      </div>

      <div className="Show-Right-Container">
        <div className="Show-Rsid-Info">
          <p>Chromosome: {props.chromosome}</p>
          <p>Position: {props.position}</p>
          <p>Genotype: {props.genotype}</p>
        </div>
        <div className="Show-Geno-Summary">
          Variants:
          <Variant
            gen={props.genotype}
            var={props.info.geno1var}
            mag={props.info.geno1mag}
            sum={props.info.geno1sum}
          />
          <Variant
            gen={props.genotype}
            var={props.info.geno2var}
            mag={props.info.geno2mag}
            sum={props.info.geno2sum}
          />
          <Variant
            gen={props.genotype}
            var={props.info.geno3var}
            mag={props.info.geno3mag}
            sum={props.info.geno3sum}
          />
        </div>
      </div>
    </div>
  );
};

export default IDShow;
