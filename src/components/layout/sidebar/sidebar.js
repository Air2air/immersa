import React from "react";
import { ListGroup, Col } from "react-bootstrap";

import { GoAlert } from "react-icons/go";
import { FiSend } from "react-icons/fi";
import { RiDashboardFill } from "react-icons/ri";
import "./styles.scss";

export default class Sidebar extends React.Component {
  render() {
    return (
      <>
        <Col xs={2} column="true">
          <div className="header-logo mb-4 mt-4">
            <img
              alt="Immersa"
              src="https://secureservercdn.net/72.167.241.46/jpf.d19.myftpupload.com/wp-content/uploads/2021/03/immersa_logo_fullcolor-2.png"
            />
          </div>

          <ListGroup variant="flush">
            <ListGroup.Item action href="/issues" className="py-4">
              <GoAlert className="mr-3" style={{ fill: "lightgray" }} />
              Issues
            </ListGroup.Item>
            <ListGroup.Item action href="/dashboard" className="py-4">
              <RiDashboardFill className="mr-3" style={{ fill: "lightgray" }} />
              Dashboard
            </ListGroup.Item>
            <ListGroup.Item action href="/activity" className="py-4">
              <FiSend className="mr-3" style={{ stroke: "lightgray" }} />
              Activity
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </>
    );
  }
}
