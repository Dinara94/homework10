import api from "../../api";

export const DELETE= "DELETE_USER_FROM_LIST";
export const UPDATE= "UPDATE_SELECTED_USER";
export const CREATE= "CREATE_NEW_USER";
export const FETCH = "FETCH_ALL_USERS";
export const SET = "SET_ALL_USERS";

export function deleteUser(id) {
  return { type: DELETE, payload: id };
}

export function setUsers(payload) {
  return { type: SET, payload };
}

export function updateUser(id) {
  return { type: UPDATE, payload: id };
}

export function createUser(newItem) {
  return { type: CREATE, payload: newItem };
}

export function fetchUsers() {
  return function(dispatch) {
    api.get().then(({ data }) => {
      dispatch({
        type: SET,
        payload: data,
      })
    });
  };
}

