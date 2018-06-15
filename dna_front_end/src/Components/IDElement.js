import React from "react";
import "../Grid.css";

const IDElement = props => {
  return (
    <div>
      <div>
        {props.genotype
          .split("")
          .sort()
          .join("") ===
        props.info.geno1var
          .split("")
          .sort()
          .join("") ? (
          <div>
            <div onClick={() => props.onClick(props.info)} className="Item1">
              {props.description}
            </div>
          </div>
        ) : props.genotype
          .split("")
          .sort()
          .join("") ===
        props.info.geno2var
          .split("")
          .sort()
          .join("") ? (
          <div>
            <div onClick={() => props.onClick(props.info)} className="Item2">
              {props.description}
            </div>
          </div>
        ) : (
          <div>
            <div onClick={() => props.onClick(props.info)} className="Item3">
              {props.description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IDElement;
