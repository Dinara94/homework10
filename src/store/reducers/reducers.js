import { CREATE, DELETE, UPDATE } from "../actions/actions";

const INITIAL_STATE = {
  list: [],
};

export default function reducers(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case DELETE:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== payload),
      };

    case UPDATE: {
      return {
        ...state,
        list: state.list.map((item) => (item.id !== payload.id ? item : payload)),
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
