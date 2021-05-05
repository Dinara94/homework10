export const DELETE= "deleteUserFromList";
export const UPDATE= "updateSelectedUser";
export const CREATE= "createNewUser";

export function deleteUser(id) {
  return { type: DELETE, payload: id };
}

export function updateUser(id) {
  return { type: UPDATE, payload: id };
}

export function createUser(newItem) {
  return { type: CREATE, payload: newItem };
}
