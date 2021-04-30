import api from "../../../api";
import { API_URL } from "../../../constants";

export function getUsersList() {
  return api.get(API_URL);
}

export function getUser(userId) {
  return api.get(API_URL + "/" + userId);
}

export function createUser(data) {
  return api.post(API_URL, data);
}

export function updateUser(data) {
  return api.put(`${API_URL}/${data.id}`, data);
}

export function removeUser(id) {
  return api.delete(`${API_URL}/${id}`);
}
