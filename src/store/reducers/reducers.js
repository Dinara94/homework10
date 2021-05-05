import { CREATE, DELETE, UPDATE } from "../actions/actions";

const INITIAL_STATE = {
  list: [
    {
      id: 2,
      name: "Jane Air",
      phone: 55566687,
      mail: "user@gmail.com",
    },
    {
      id: 3,
      name: "Joe Tribbiani",
      phone: 55566687,
      mail: "user@gmail.com",
    },
    {
      id: 4,
      name: "Angela Davis",
      phone: 55566687,
      mail: "user@gmail.com",
    },
  ],
};

export default function reducers(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case DELETE:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== payload),
      };

    case UPDATE: {
      const item = state.list.find((element) => element.id === payload);
      const newItem = { ...item, completed: !item.completed };
      return {
        ...state,
        list: state.list.map((item) => (item.id !== payload ? item : newItem)),
      };
    }

    case CREATE:
      return {
        ...state,
        list: [...state.list, payload],
      };
    default:
      return state;
  }
}
