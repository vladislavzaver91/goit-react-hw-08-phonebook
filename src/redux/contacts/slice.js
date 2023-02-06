import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, delContact, editContact } from './operations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
    items: [],
    isLoading: false,
    error: null,
},
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [delContact.pending]: handlePending,
        [editContact.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,
        [delContact.rejected]: handleRejected,
        [editContact.rejected]: handleRejected,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },

        [delContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                item => item.id === action.payload.id
            );
            state.items.splice(index, 1);
        },
        [editContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.map(item => {
                if (item.id === action.payload.id) {
                    item.name = action.payload.name;
                    item.number = action.payload.number;
                }
                return item;
            });
        },
    },
});

export const contactsReducer = contactsSlice.reducer;