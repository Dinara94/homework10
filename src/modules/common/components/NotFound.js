import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Not found</h1>
      <p>
        Page not found. Please visit <Link to="/">homepage</Link>.
      </p>
    </div>
  );
}

export default NotFound;
