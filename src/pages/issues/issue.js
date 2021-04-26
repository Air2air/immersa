import React from "react";
import issuesJson from "./../../data/data.json";

const issues = issuesJson;

const IssuePage = ({ match, location }) => {
  const {
    params: { issueId },
  } = match;

  return (
    <>
      <p>
        <strong>Issue ID: </strong>
        {issueId}
      </p>
      <p>
        <strong>Issue Name: </strong>
        {/* {issues[issueId - 1].name} */}
        {issues.name}
      </p>
      <p>
        <strong>Age: </strong>
        {/* {issues[issueId - 1].dateTime} */}
      </p>
    </>
  );
};
export default IssuePage;
