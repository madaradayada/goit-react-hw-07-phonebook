import { configureStore } from '@reduxjs/toolkit';
import {  contactReducer } from "./slice/contactsSlice";
import { filterReducer } from "./slice/filterSlice";

export const store = configureStore({
    reducer: {
       contacts: contactReducer,
       filter: filterReducer, 
    },
}); 