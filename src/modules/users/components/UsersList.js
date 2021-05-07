import React,  {useEffect } from "react";
import UserListItem from "./UserListItem";
import { Container } from "@material-ui/core";
import api from "../../../api";

function UsersList({ users, deleteUser, updateUser, setUsers }) {

useEffect(() => {
  api.get().then(({ data }) => setUsers(data));
}, [])

  return (
    <Container maxWidth="xl">
      {users.map((user) => (
        <UserListItem
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          updateUser={updateUser}
        />
      ))}
    </Container>
  );
}

export default UsersList;
