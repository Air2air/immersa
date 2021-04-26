import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import issuesJson from "./../../data/data.json";

const Doodle = () => {
  return (
    <>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

const data = [
  {
    id: 1,
    department: "Human Resources",
    issues: [
      {
        name: "Applicants are slowing",
        manager: "Stephanie Glick",
        description:
          "New job applications are down 34% over the last two weeks, compared to the number of job reqs available.",
        sent: false,
        dateTime: "3 hours ago",
      },
    ],
  },
  {
    id: 2,
    department: "Facilities",
    issues: [
      {
        name: "Floor temperature is low",
        manager: "Cho Sun Park",
        description:
          "Floor 3 and 4 temperatures are averaging 2.6 degrees cooler than other floors.",
        sent: false,
        dateTime: "2 days ago",
      },
      {
        name: "Floor temperature is high",
        manager: "Cho Sun Park",
        description:
          "Floor 3 and 4 temperatures are averaging 2.6 degrees cooler than other floors.",
        sent: false,
        dateTime: "2 days ago",
      },
    ],
  },
  {
    id: 3,
    department: "Engineering",
    issues: [
      {
        name: "Longer time between product releases",
        manager: "Sumeet Mohdi",
        description:
          "Product release times are averaging 2.1 weeks longer than at this time in 2020.",
        sent: false,
        dateTime: "Yesterday at 2:00",
      },
      {
        name: "Shorter time between product releases",
        manager: "Sumeet Mohdi",
        description:
          "Product release times are averaging 2.1 weeks longer than at this time in 2020.",
        sent: false,
        dateTime: "Yesterday at 2:00",
      },
    ],
  },
  {
    id: 4,
    department: "Marketing",
    issues: [
      {
        name: "Absenteeism in Marketing",
        department: "Human Resources",
        manager: "Carlos Juarez",
        description:
          "Marketing department staff are on premises 42% of the time they were at this time last year.",
        sent: false,
        dateTime: "4 days ago",
      },
    ],
  },
];

const eachDepartment = data.map((category) => {
  const departmentIssuesList = category.issues.map(function (item) {
    return (// Inner loop
      <li key={item.name}>
        <span>{item.department}</span>
        <span>{item.manager}</span>
        <span>{item.dateTime}</span>
        <span>{item.description}</span>
      </li>
    );
  });
  return (// Outer loop
    <>
      {category.department}
      <ul key={category.department}>{departmentIssuesList}</ul>
    </>
  );
});

export default function IssuesPage() {
  return (
    <>
      <div className="categories">{eachDepartment}</div>
    </>
  );
}
