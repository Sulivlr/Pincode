import {createSlice} from "@reduxjs/toolkit";


interface PasswordState {
    value: string;
    isCorrect: boolean | null;
}

const initialState: PasswordState = {
    value: '',
    isCorrect: null,
}

const passwordSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        digit: (state) => {},
        deleteDigit: (state) => {},
        truePassword: (state) => {},
    }
});

export const {digit, deleteDigit, truePassword} = passwordSlice.actions;
export default passwordSlice.reducer;