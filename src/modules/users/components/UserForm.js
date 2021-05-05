import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./UseForm.css";
import {
  updateUser,
  createUser,
} from "../../../store/actions/actions";


const initialValues = {
  name: "",
  phone: null,
  email: "",
};

function UserForm({ updateUser, createUser}) {
  const history = useHistory();
  const { userId } = useParams();
  const [ values, setValues ] = useState(initialValues);


  function onUserFormSubmit(e) {
    e.preventDefault();
    createUser(values);
    history.goBack();

    resetForm();
  };

  function resetForm() {
    setValues(initialValues);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
          /* value={selectedUser ? selectedUser.name : ""} */
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
          /* value={selectedUser ? selectedUser.phone : ""} */
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
          /* value={selectedUser ? selectedUser.email : ""} */
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

const mapDispatchToProps = {
  updateUser,
  createUser,
}


export default connect(null, mapDispatchToProps)(UserForm);
