import { Container } from "@material-ui/core";
import React from "react";
import Users from "./modules/users/components/Users";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Container maxWidth="md">
      <Router>
        <Users />
      </Router>
    </Container>
  );
}

export default App;
