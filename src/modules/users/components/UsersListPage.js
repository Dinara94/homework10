import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import Loading from "../../common/components/Loading";
import UsersList from "./UsersList";
import { Button } from "@material-ui/core";

export default function UsersListPage() {
  const { url } = useRouteMatch();
  const { users, remove, isLoading } = useUsers();

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1>Users</h1>
          <UsersList list={users} onDelete={remove} />
          <Link to={url + "/add"}>
            <Button variant="contained" color="default" style={btnStyle()}>
              Add new user
            </Button>
          </Link>
        </>
      )}
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
