import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Sidebar from "./components/layout/sidebar/sidebar";
import Header from "./components/layout/header/header";

import DashboardPage from "./pages/dashboard/dashboard";
import HomePage from "./pages/home/home";
import IssuesPage from "./pages/issues/issues";

import "./styles/styles.scss";

const App = () => (
  <>
    <Router>
      <Container fluid>
        <Row>
          <Sidebar />
          <Col>
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/issues" component={IssuesPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
          </Col>
        </Row>
      </Container>
    </Router>
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
