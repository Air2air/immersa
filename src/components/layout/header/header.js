import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./styles.scss";

function Header() {
  return (
    <>
      <Navbar
        className="d-flex justify-content-between align-items-center p- 2"
      >
        <Nav className="ml-auto">
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
