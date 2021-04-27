import React from "react";
import {
  Link
} from "react-router-dom";


const HomePage = () => {
  return (
    <>
      <h4 className="mb-4">Admin page, first draft </h4>
      <p>This is a very dry first cut at an Admin page.</p>
      <p>
        Doesn't look pretty yet, we would iterate back and forth a lot 
        before making it look nice, and doing the responsive views.
      </p>
      <p>Check out the <Link to="/dashboard">Dashboard</Link> and <Link to="/issues">Issues list</Link>.</p>
    </>
  );
};

export default HomePage;
