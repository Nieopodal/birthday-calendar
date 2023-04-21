import {configureStore} from "@reduxjs/toolkit";
import {birthdaySlice} from "../features/birthday/birthday-slice";

export const store = configureStore({
    reducer: {
        birthday: birthdaySlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;