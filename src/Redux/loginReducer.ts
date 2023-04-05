import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loginData} from "../Models/Models";

type SliceState = {
    name: string,
    email: string,
    isAuth: boolean,
    isStarted: boolean
}

const initialState: SliceState = {
    name: "",
    email: "",
    isAuth: false,
    isStarted: false,
}

const loginReducer = createSlice({
    name: "loginReducer",
    initialState,
    reducers: {
        startTestReducer(state: SliceState, action: PayloadAction<loginData>){
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isStarted = true;
            state.isAuth = true;


            return state;
        },
    }
})

export default loginReducer.reducer;
export const {startTestReducer} = loginReducer.actions