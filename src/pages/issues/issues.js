import React from "react";
import {
  Accordion,
  Card,
  Button,
  ButtonToolbar,
  ListGroup,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import { BiTimeFive } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import issuesJson from "./../../data/data.json";

const data = issuesJson;

const eachDepartment = data.map((category) => {
  const departmentIssuesList = category.issues.map(function (item) {
    return (
      // Inner loop
      <ListGroup.Item className="py-2" key={item.index}>
        <Row>
          <Col xs={6} className="d-flex align-items-center caption py-2">
            <BiTimeFive className="mr-2" style={{ fill: "lightgray" }} />
            {item.dateTime}
          </Col>
          <Col
            xs={6}
            className="d-flex justify-content-end align-items-center caption py-2"
          >
            <FaUser className="mr-2" style={{ fill: "lightgray" }} />
            Mgr:&nbsp;
            {item.manager}
          </Col>
        </Row>
        <Row>
          <Col className="py-3">
            <h5>{item.name}</h5>
            <p>{item.description}</p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center py-2 mb-3 caption">
            <Badge pill variant="secondary" className="mr-2">
              {item.responses}
            </Badge>
            Responses received
          </Col>
          <Col className=" py-2 mb-3">
            <ButtonToolbar className="justify-content-end">
              <Button variant="danger" className="mr-3">
                Delete
              </Button>
              <Button variant="primary">Resend</Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  });
  return (
    // Outer loop
    <>
      <Accordion className="mb-2">
        <Card>
          <Card.Header className="p-2">
            <Accordion.Toggle
              as={Card.Body}
              variant="link"
              eventKey={category.id}
              className="d-flex action align-items-center justify-content-between p-2"
            >
              <div>{category.department}</div>
              <Badge pill variant="danger">
                {departmentIssuesList.length}
              </Badge>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={category.id}>
            <Card.Body className="p-2">
              <ListGroup variant="flush">{departmentIssuesList}</ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
});

export default function IssuesPage() {
  return (
    <>
      <div className="categories mt-4">{eachDepartment}</div>
    </>
  );
}
