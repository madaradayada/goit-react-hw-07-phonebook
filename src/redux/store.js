import { configureStore } from '@reduxjs/toolkit';
import {  contactReducer } from "./Slice/contactsSlice";
import { filterReducer } from "./Slice/filterSlice";

export const store = configureStore({
    reducer: {
       contacts: contactReducer,
       filter: filterReducer, 
    },
}); 