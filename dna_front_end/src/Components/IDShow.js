import React from "react";
import "../Grid.css";

const IDShow = props => {
  return (
    <div className="Container-Item">
      <h1>{props.rsid}</h1>
      <p>Chromosome: {props.chromosome}</p>
      <p>Position: {props.position}</p>
      <p>Genotype: {props.genotype}</p>
    </div>
  );
};

export default IDShow;
