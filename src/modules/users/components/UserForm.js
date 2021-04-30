import React, { useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import "./UseForm.css";

export function UserForm() {
  const history = useHistory();
  const { userId } = useParams();
  const { save, findSelected, selectedUser, setSelectedUser } = useUsers();

  useEffect(() => {
    findSelected(userId);
  }, []);

  console.log(userId);
  console.log(selectedUser);

  const onUserFormSubmit = (e) => {
    e.preventDefault();
    save(selectedUser);
    history.goBack();
  };

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  function onBackBtnClick() {
    history.goBack();
  }

  return (
    <form action="" className="contact-form" onSubmit={onUserFormSubmit}>
      <h2 className="form-title">User Details</h2>
      <div className="row">
        <label htmlFor="nameInput" className="label">
          Name
        </label>
        <TextField
          type="text"
          name="name"
          id="nameInput"
          value={selectedUser ? selectedUser.name : ""}
          onChange={onChange}
          variant="standard"
          color="secondary"
        />
      </div>

      <div className="row">
        <label htmlFor="surnameInput" className="label">
          Phone
        </label>
        <TextField
          type="text"
          name="phone"
          id="phoneInput"
          value={selectedUser ? selectedUser.phone : ""}
          onChange={onChange}
          variant="standard"
          color="secondary"
        />
      </div>

      <div className="row">
        <label htmlFor="phoneInput" className="label">
          Email
        </label>
        <TextField
          type="text"
          name="email"
          id="emailInput"
          value={selectedUser ? selectedUser.email : ""}
          onChange={onChange}
          variant="standard"
          color="secondary"
        />
      </div>

      <div className="buttons">
        <Button
          type="submit"
          className="button"
          onClick={onUserFormSubmit}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
        <Button
          type="button"
          className="button"
          onClick={onBackBtnClick}
          variant="contained"
          color="secondary"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default UserForm;
