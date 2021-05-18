import api from '../../api';

export const SET_CONTACTS_ACTION = 'SET_CONTACTS_ACTION';
export const fetchContacts = () => async (dispatch) => {
    const {
        data
    } = await api.get();
    dispatch({
        type: SET_CONTACTS_ACTION,
        payload: data,
    });
};

export const CHANGE_CONTACT_ACTION = 'CHANGE_CONTACT_ACTION';
const changeContact = async (contact, dispatch) => {
    const {
        data
    } = await api.put(contact.id, contact);
    dispatch({
        type: CHANGE_CONTACT_ACTION,
        payload: data,
    });
    return data;
};

export const ADD_CONTACT_ACTION = 'ADD_CONTACT_ACTION';
const addContact = async (contact, dispatch) => {
    const {
        data
    } = await api.post('', contact);
    dispatch({
        type: ADD_CONTACT_ACTION,
        payload: data
    });
    return data;
};
export const saveContact = (contact) => (dispatch) => {
    console.log('save action', contact);
    return contact.id ?
        changeContact(contact, dispatch) :
        addContact(contact, dispatch);
};

export const DELETE_CONTACT_ACTION = 'DELETE_CONTACT_ACTION';
export const deleteContact = (payload) => async (dispatch) => {
    dispatch({
        type: DELETE_CONTACT_ACTION,
        payload,
    });
    await api.delete(payload);
};