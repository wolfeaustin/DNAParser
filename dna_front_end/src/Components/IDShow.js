import React from "react";
import "../Grid.css";

const IDShow = props => {
  console.log(props);
  return (
    <div className="Container-Item">
      <h1>{props.info.description}</h1>
      <h2>{props.rsid}</h2>
      <p>Chromosome: {props.chromosome}</p>
      <p>Position: {props.position}</p>
      <p>Genotype: {props.genotype}</p>
      <p>Details: {props.info.details}</p>
    </div>
  );
};

export default IDShow;
