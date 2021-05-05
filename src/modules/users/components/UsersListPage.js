import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import UsersList from "./UsersList";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import {
  deleteUser,
  updateUser,
} from "../../../store/actions/actions";


function UsersListPage({ users, dispatch }) {
  const { url } = useRouteMatch();

  return (
    <div>
      <h1 style={textStyle()}>Users</h1>
      <UsersList users={users} deleteUser={deleteUser} updateUser={updateUser} />
      <Link to={url + "add"}>
        <Button variant="contained" color="default" style={btnStyle()}>
          Add new user
        </Button>
      </Link>
    </div>
  );
}

function btnStyle() {
  return {
    display: "block",
    width: "25%",
    margin: "50px auto",
    fontWeight: "600",
  };
}

function textStyle() {
  return {
    textAlign: "center",
  };
}

function mapStateToProps(state) {
  return { users: state.list };
}

const mapDispatchToProps = {
   deleteUser,
   updateUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListPage);

