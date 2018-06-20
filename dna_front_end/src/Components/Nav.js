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
        <NavLink
          to="/addarticle"
          style={{
            fontWeight: "bold",
            color: "white"
          }}
        >
          <Button className="pt-minimal" icon="add" text="Contribute" />
        </NavLink>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <NavbarDivider />
        <NavLink
          align={Alignment.RIGHT}
          to="/user"
          style={{
            fontWeight: "bold",
            color: "white"
          }}
        >
          <Button className="pt-minimal" icon="user" />
        </NavLink>
      </NavbarGroup>
    </Navbar>
  );
};

export default Nav;
