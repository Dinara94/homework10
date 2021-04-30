import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import "./Header.css";

function Header() {
  return (
    <div>
      <Grid container direction="row" justify="space-between" alignItems="center"  spacing={0}>
        <Link to="/dashboard" variant="body2" color="inherit" className="navBar_link">Home</Link>
        <Link to="/users" variant="body2" color="inherit" className="navBar_link">Users</Link>
      </Grid>
    </div>
  );
}

export default Header;
