import React from "react";
import "../Grid.css";
import { MenuItem, MenuDivider } from "@blueprintjs/core";

const IDElement = props => {
  return (
    <div>
      <MenuItem
        onClick={() => props.onClick(props.info)}
        icon="new-text-box"
        text={props.description}
      />
      <MenuDivider />
    </div>
  );
};

export default IDElement;
