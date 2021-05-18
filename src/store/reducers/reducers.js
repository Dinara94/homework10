import {
  SET_CONTACTS_ACTION,
  DELETE_CONTACT_ACTION,
  ADD_CONTACT_ACTION,
  CHANGE_CONTACT_ACTION,
} from '../actions/actions';

const initialState = {
  contacts: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
      case SET_CONTACTS_ACTION:
          return { ...state, contacts: payload };
      case DELETE_CONTACT_ACTION:
          return {
              ...state,
              contacts: state.contacts.filter((el) => el.id !== payload),
          };
      case ADD_CONTACT_ACTION:
          return {
              ...state,
              contacts: [...state.contacts, payload],
          };
      case CHANGE_CONTACT_ACTION:
          return {
              ...state,
              contacts: state.contacts.map((el) =>
                  el.id !== payload.id ? el : payload
              ),
          };
      default:
          return state;
  }
}