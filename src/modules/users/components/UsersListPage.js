import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import UsersList from "./UsersList";
import { Button } from "@material-ui/core";

export default function UsersListPage() {
  const { url } = useRouteMatch();
  const { users, remove } = useUsers();

  return (
    <div>
      <h1 style={textStyle()}>Users</h1>
      <UsersList list={users} onDelete={remove} />
      <Link to={url + "/add"}>
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
