import React from "react";
import UserListItem from "./UserListItem";
import { Container } from "@material-ui/core";

function UsersList({ users, deleteUser, updateUser }) {
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
