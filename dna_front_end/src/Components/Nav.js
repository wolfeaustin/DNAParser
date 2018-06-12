import React from "react";
import {
  Alignment,
  NavbarGroup,
  Button,
  NavbarHeading,
  NavbarDivider,
  Navbar
} from "@blueprintjs/core";
import { NavLink } from "react-router-dom";

const Nav = props => {
  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Genie in a Bottle</NavbarHeading>
        <NavbarDivider />
        <NavLink
          to="/"
          style={{
            fontWeight: "bold",
            color: "white"
          }}
        >
          <Button className="pt-minimal" icon="home" text="Home" />
        </NavLink>
        <NavLink
          to="/upload"
          style={{
            fontWeight: "bold",
            color: "white"
          }}
        >
          <Button className="pt-minimal" icon="upload" text="Upload File" />
        </NavLink>
        <NavLink
          to="/results"
          style={{
            fontWeight: "bold",
            color: "white"
          }}
        >
          <Button className="pt-minimal" icon="document" text="Report" />
        </NavLink>
      </NavbarGroup>
    </Navbar>
  );
};

export default Nav;
