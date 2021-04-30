import { Container } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./modules/common/components/Header";
import NotFound from "./modules/common/components/NotFound";
import Dashboard from "./modules/dashboard/components/Dashboard";
import Users from "./modules/users/components/Users";

function App() {
  return (
    <Container maxWidth="md">
      <Router>
        <Header />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/users" component={Users} />
          <Route path="/notfound" component={NotFound} />
          <Route path="/" exact>
            <Redirect to="/dashboard" />
          </Route>
          <Route path="*">
            <Redirect to="/notfound" />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
