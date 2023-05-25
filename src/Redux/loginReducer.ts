import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type loginSliceState = {
    name: string,
    isAuth: boolean,
    isStarted: boolean
}

const initialState: loginSliceState = {
    name: "",
    isAuth: false,
    isStarted: false,
}

const loginReducer = createSlice({
    name: "loginReducer",
    initialState,
    reducers: {
        startTestReducer(state: loginSliceState, action: PayloadAction<string>) {
            state.name = action.payload;
            state.isStarted = true;
            state.isAuth = true;


            return state;
        },
        finishTestReducer(state: loginSliceState) {
            state.isStarted = false;
            return state;
        }
    }
})

export default loginReducer.reducer
export const {startTestReducer, finishTestReducer} = loginReducer.actions