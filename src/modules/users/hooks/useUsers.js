import { useCallback, useEffect, useState } from "react";
import {
  getUsersList,
  createUser,
  updateUser,
  removeUser,
  getUser,
} from "../services/usersService";

export default function () {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);


  const refresh = useCallback(() => {
    getUsersList().then(({ data }) => {
      setUsers(data);
    });
  }, [users]);

  const findSelected = useCallback((id) => {
    getUser(id).then(({ data }) => {
      setSelectedUser(data);
    });
  }, []);

  const save = useCallback((data) => {
    if (data.id) {
      updateUser(data).then(({ data }) => {
        setUsers((users) =>
          users.map((item) => (item.id === data.id ? data : item))
        );
      });
    } else {
      createUser(data).then(({ data }) => {
        setUsers((users) => [...users, data]);
      });
    }
  }, []);

  const remove = useCallback((id) => {
    removeUser(id).then(() => {
      setUsers((users) => users.filter((item) => item.id !== id));
    });
  }, []);

  useEffect(refresh, [refresh]);

  return { users, findSelected, selectedUser, setSelectedUser, refresh, save, remove };
}
