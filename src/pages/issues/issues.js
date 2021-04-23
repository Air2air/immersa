import React from "react";
import { Link } from "react-router-dom";

import issuesJson from "./../../data/data.json";

const issues = issuesJson;

const IssuesPage = () => {
  return (
    <>
      {issues.map((issue, index) => (
        <h5 key={index}>
          <Link to={`/issue/${index + 1}`}>{issue.name}</Link>
        </h5>
      ))}
    </>
  );
};

export default IssuesPage;
