import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/header";
import AboutPage from "./pages/about/about";
import IssuesPage from "./pages/issues/issues";
import IssuePage from "./pages/issues/issue";

import "./styles/styles.scss";

const IndexPage = () => {
  return <h3>Home Page</h3>;
};

const App = () => {
  return (
    <section className="App">
      <Header />
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/issues">Issues</Link>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/issues" component={IssuesPage} />
        <Route exact path="/issue/:issueId" component={IssuePage} />
        <Route exact path="/about" component={AboutPage} />
      </Router>

    </section>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
