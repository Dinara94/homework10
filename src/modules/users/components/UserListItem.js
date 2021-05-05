import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";

function UserListItem({ user, deleteUser, updateUser }) {
  const { url } = useRouteMatch();
  const onDeleteClick = (e) => {
    deleteUser(user.id);
  };

  const onUpdateClick = (e) => {
    updateUser(user.id);
  };

  return (
    <Grid container direction="row" spacing={0} alignItems="center">
      <Grid container item xs={2} spacing={0}>
        <p>{user.name}</p>
      </Grid>
      <Grid container item xs={2} spacing={0}>
        <p>{user.phone}</p>
      </Grid>
      <Grid container item xs={2} spacing={0}>
        {" "}
        <p>{user.email}</p>
      </Grid>
      <Grid container item xs={2} spacing={0}>
        <p>{user.website}</p>
      </Grid>
      <Grid container item xs={2} spacing={0}>
        <Link to={url + user.id}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={onUpdateClick}
          >
            Edit
          </Button>
        </Link>
      </Grid>
      <Grid container item xs={2} spacing={0}>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          onClick={onDeleteClick}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}

export default UserListItem;
