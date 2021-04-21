import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Carousel, Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import Header from "./header";

const timePoints = [
  {
    id: 1,
    title: "Made it in to work",
    color: "blue1",
    description: "About 4 minutes earlier than usual",
    card1: "280 is better this time of day",
    card2: "You are in the top 70% for punctuality",
  },
  {
    id: 2,
    title: "Check Salesforce first",
    color: "blue2",
    description:
      "Spend 30 minutes going through leads.  Several others in your department are going through them now as well.",
    card1: "Leads are low this week and of lesser quality",
    card2: "You rank in the top 34% for lead followup closes.",
  },
  
  {
    id: 3,
    title: "Lead followup - 45 mins",
    color: "blue3",
    description:
      "The highest performing salespeople in your department spend 44 min. per day on Lead followup.",
    card1: "Higher sales conversions are coming from customers located in the midwest at this time.",
    card2: "You could spend more time on lead followup",
  },
  {
    id: 4,
    title: "Check in with Steve at 11:15",
    color: "blue4",
    description: "Steve sent you an email with some questions.",
    card1:
      "The rest of your day looks good for inbound calls.  These typically increase in the afternoon.",
    card2: "You could spend more time on lead followup",
  },
  {
    id: 5,
    title: "Go to lunch at 12:10, back by 12:50.",
    color: "blue4",
    description:
      "Customers are more highly available in this time zone if you begin calls after 1:00 PST.",
    card1:
      "The rest of your day looks good for inbound calls.  These typically increase in the afternoon.",
    card2: "You could spend more time on lead followup",
  },
  {
    id: 6,
    title: "Apply for a vacation in August",
    color: "blue4",
    description:
      "Sales activity dips during early August.  If you take a vacation then, your Q3 numbers should increase by about 4 percent.",
    card1:
      "The rest of your day looks good for inbound calls.  These typically increase in the afternoon.",
    card2: "You could spend more time on lead followup",
  },
];

function StoryLine(props) {
  const description = props.timePoints.map((timePoint) => (
    <Carousel.Item
      className={timePoint.color}
      interval={10000}
      key={timePoint.id}
    >
      <div className="d-flex justify-content-around align-items-center flex-column py-5">
        <h1 className="mt-5 text-white">{timePoint.title}</h1>
        <p>{timePoint.description}</p>
        <CardDeck className="mb-5">
          <Card
            style={{ height: "20vh" }}
            text="white"
            className="d-flex justify-content-around align-items-center flex-column p-5 mx-2"
          >
            <p>{timePoint.card1}</p>
          </Card>
          <Card
            style={{ height: "20vh" }}
            text="white"
            className="d-flex justify-content-around align-items-center flex-column p-5 mx-2"
          >
            <p>{timePoint.card2}</p>
          </Card>
        </CardDeck>
      </div>
    </Carousel.Item>
  ));

  return <Carousel>{description}</Carousel>;
}

const App = () => {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Col style={{ padding: 0 }}>
          <StoryLine timePoints={timePoints} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
