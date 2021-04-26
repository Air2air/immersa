import React from "react";
import {
  Card,
  Row,
  Col,
  Badge,
  ButtonToolbar,
  Button,
} from "react-bootstrap";
// import LineChart from "../../components/charts/lineChart";
import PieChart from "../../components/charts/pieChart";
import { BsFillGearFill } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";

export default function DashboardPage() {
  return (
    <>
      <h4>Dashboard</h4>
      <Row>
        <Col xs={6}>
        <Card bg="info" text="white">
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>Employee response rates up 6%</Card.Title>
              {/* <LineChart /> */}
              <Row>
                <Col className="d-flex justify-content-between p-2 px-4">
                    <BsFillGearFill size="1.5em"/>
                    <FaShareAlt size="1.5em"/>
                </Col>
              </Row>
              </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card bg="danger" text="white">
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>Employee response rates up 6%</Card.Title>
              <PieChart />
              <Row>
                <Col className="d-flex align-items-center py-2 caption">
                  <Badge pill variant="secondary" className="mr-2">
                    13
                  </Badge>
                  Responses received
                </Col>
                <Col className="py-2 ">
                  <ButtonToolbar className="justify-content-end">
                    <Button variant="danger" className="mr-3">
                      Delete
                    </Button>
                    <Button variant="primary">Resend</Button>
                  </ButtonToolbar>
                </Col>
              </Row>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};


