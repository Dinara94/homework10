import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@material-ui/core";
import { Provider } from "react-redux";
import Users from "./modules/users/components/Users";

import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Router>
          <Users />
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
