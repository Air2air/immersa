import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Carousel,
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  Modal,
  Button,
} from "react-bootstrap";
import Header from "./header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

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
      "With your current leads, it's not worth spending more time on followup",
    card1:
      "The highest performing salespeople in your department spend 44 min. per day on Lead followup.",
    card2: "Higher sales conversion rates are coming from customers located in the midwest at this time.",
  },
  {
    id: 4,
    title: "Check in with Steve at 11:15",
    color: "blue4",
    description: "Steve sent you an email with some questions.  Try to get this done before today's peak sales period.",
    card1:
      "The rest of your day looks good for inbound calls.  These typically increase in the afternoon.",
    card2: "Spend about 20 minutes today answering emails from staff.",
  },
  {
    id: 5,
    title: "Go to lunch at 12:10, back by 12:50.",
    color: "blue4",
    description:
      "Customers have higher call availablity in this time zone after 1:00 PST.",
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
      "Your Q3 numbers are in the top 83%.",
    card2: "You take 10% less vacation time than other staff.",
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
            <InfoModal />
          </Card>
          <Card
            style={{ height: "20vh" }}
            text="white"
            className="d-flex justify-content-around align-items-center flex-column p-5 mx-2"
          >
            <p>{timePoint.card2}</p>

            <InfoModal />
          </Card>
        </CardDeck>
      </div>
    </Carousel.Item>
  ));

  return <Carousel>{description}</Carousel>;
}

function InfoModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <FontAwesomeIcon icon="coffee" size="lg" /> */}
      <Button variant="primary" onClick={handleShow}>
        More info
      </Button>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="mt-4"
        >
          <Modal.Title centered>My department's peak sales period</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <VictoryChart
            domainPadding={2}
            animate={{ duration: 500 }}
            style={{
              background: { fill: "none" },
            }}
          >
            <VictoryBar
              style={{
                data: { fill: "#c43a31" },
                labels: { fill: "white" },
              }}
              barRatio={1}
              data={[
                { x: "9:00", y: 1234 },
                { x: "10:00", y: 2048 },
                { x: "11:00", y: 4600 },
                { x: "12:00", y: 7000 },
                { x: "1:00", y: 8100 },
                { x: "2:00", y: 6000 },
                { x: "3:00", y: 5500 },
                { x: "4:00", y: 3200 },
                { x: "5:00", y: 2100 },
              ]}
              labels={({ datum }) => datum.x}
            />
            <VictoryAxis
              style={{
                axis: { stroke: "transparent" },
                ticks: { stroke: "transparent" },
                tickLabels: { fill: "transparent" },
              }}
            />
          </VictoryChart>
          <Modal.Footer
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="p-0 mb-4"
          >
            <Button size="lg" variant="primary" onClick={handleClose}>
              Got it!
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}

const App = () => {
  return (
    <>
      <Container fluid>
        <Header />
        <Row>
          <Col style={{ padding: 0 }}>
            <StoryLine timePoints={timePoints} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
