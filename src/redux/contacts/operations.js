import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact',
async ({ name, number }, thunkAPI) => {
    try {
        const { data } = await axios.post('/contacts', { name, number });
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const delContact = createAsyncThunk('contacts/deleteContact',
async (id, thunkAPI) => {
    try {
        const { data } = await axios.delete(`/contacts/${id}`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const editContact = createAsyncThunk('contacts/editContact',
async ({ id, name, number }, thunkAPI) => {
    try {
        const { data } = await axios.patch(`/contacts/${id}`, { name, number });
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});