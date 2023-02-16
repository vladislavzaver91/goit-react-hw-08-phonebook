import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice';
import { contactsSlice } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';
import themeSlice from './theme/themeSlice';

const rootPersistConfig = {
    key: 'user',
    storage: storage,
    whitelist: ['token'],
};

const themePersistedConfig = {
    key: 'theme',
    storage,
};

const rootReducer = combineReducers({
    auth: persistReducer(rootPersistConfig, authReducer),
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    theme: persistReducer(themePersistedConfig, themeSlice.reducer),
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);