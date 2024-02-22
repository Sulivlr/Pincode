import {configureStore} from "@reduxjs/toolkit";
import passwordSlice from "./containers/PasswordSlice.ts";

export const store = configureStore({
    reducer: {
        password: passwordSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;