import React from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { BsFillGearFill } from "react-icons/bs";
import { FaBell, FaUserAlt } from "react-icons/fa";
import "./styles.scss";

function Header() {
  return (
    <>
      <Navbar className="d-flex justify-content-between align-items-center p-4 mb-4">
        {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form> */}
        <Nav className="mr-auto pl-0">
          <InputGroup className="m-0 p-0">
            <FormControl
              placeholder=" "
              aria-label=" "
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Nav>

        <Nav className="ml-auto">
          <FaBell size="1.5em" className="mx-4" style={{ fill: "#AAA" }}/>
          <BsFillGearFill size="1.5em" className="mx-4" style={{ fill: "#AAA" }}/>
          <FaUserAlt size="1.5em" className="ml-4" style={{ fill: "#AAA" }}/>
          <p className="mx-2">Todd Dunning</p>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
