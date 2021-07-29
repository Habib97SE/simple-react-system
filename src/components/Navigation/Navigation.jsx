import React from "react";
import SubMenu from "./SubMenu";
import NavItem from "./NavItem";
import Nav from "react-bootstrap/Nav";

export default function Navigation(props) {
  return (
    <Nav
      className="right mr-auto my-2 my-lg-0"
      style={{ maxHeight: "100px" }}
      navbarScroll
    >
      {props.nav.map((value, index) => (
        <NavItem link={value.link} text={value.text} />
      ))}
    </Nav>
  );
}

/*
 <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
*/
