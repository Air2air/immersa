import React from "react";
import { ListGroup, Col, Nav } from "react-bootstrap";

import { GoAlert } from "react-icons/go";
import { AiFillHome } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import "./styles.scss";

export default class Sidebar extends React.Component {
  render() {
    return (
      <>
        <Col xs={2} column="true" className="sidebar mr-4">
          <div className="header-logo p-2 mb-5 mt-4">
            <img
              alt="Immersa"
              src="https://secureservercdn.net/72.167.241.46/jpf.d19.myftpupload.com/wp-content/uploads/2021/03/immersa_logo_fullcolor-2.png"
            />
          </div>

          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/" className="py-3">
              <AiFillHome className="mr-3" style={{ fill: "#AAA" }} />
              Home
            </Nav.Link>
            <Nav.Link href="/issues" className="py-3">
              <GoAlert className="mr-3" style={{ fill: "#AAA" }} />
              Issues
            </Nav.Link>
            <Nav.Link href="/dashboard" className="py-3">
              <RiDashboardFill className="mr-3" style={{ fill: "#AAA" }} />
              Dashboard
            </Nav.Link>
          </Nav>
        </Col>
      </>
    );
  }
}
