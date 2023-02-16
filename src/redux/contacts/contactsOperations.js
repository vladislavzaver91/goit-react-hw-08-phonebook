import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsAPI } from 'services';

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
async (_, { rejectWithValue }) => {
    try {
        const contacts = await contactsAPI.getContacts();
        return contacts;
    } catch (error) {
        return rejectWithValue(error);
    }
}
);

export const addContact = createAsyncThunk('contacts/addContact',
async (data, { rejectWithValue }) => {
    try {
        const contact = await contactsAPI.addNewContact(data);
        return contact;
    } catch (error) {
        return rejectWithValue(error);
    }
}
);

export const delContact = createAsyncThunk('contacts/deleteContact',
async (id, { rejectWithValue }) => {
    try {
        const contact = await contactsAPI.delContactById(id);
        return contact;
    } catch (error) {
        return rejectWithValue(error);
    }
}
);

export const editContact = createAsyncThunk('contacts/editContact',
async ({ id, values }, thunkApi) => {
    try {
        const contact = await axios.patch(`/contacts/${id}`, values);
        return contact;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
}
);