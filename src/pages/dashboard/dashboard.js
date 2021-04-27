import React from "react";
import { Card, Row, Col, Badge, ButtonToolbar, Button } from "react-bootstrap";
import BarChart from "../../components/charts/barChart";
import CalendarChart from "../../components/charts/calendarChart";
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
              <Card.Title style={{ textAlign: "center" }} className="mt-3">
                Issues sent by department
              </Card.Title>
              <BarChart />
              <Row>
                <Col className="d-flex justify-content-between p-2 px-4">
                  <BsFillGearFill size="1.5em" />
                  <FaShareAlt size="1.5em" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card bg="danger" text="white">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }} className="mt-3">
                Employee response rates up 6%
              </Card.Title>
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

      <Row>
        <Col xs={12} className="mt-3">
          <Card bg="primary" text="white">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }} className="mt-3">Responses - all departments</Card.Title>
              <CalendarChart />
              <Row>
                <Col className="d-flex justify-content-between p-2 px-4">
                  <BsFillGearFill size="1.5em" />
                  <FaShareAlt size="1.5em" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
