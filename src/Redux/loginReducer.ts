import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loginData} from "../Models/Models";

type SliceState = {
    name: string,
    isAuth: boolean,
    isStarted: boolean
}

const initialState: SliceState = {
    name: "",
    isAuth: false,
    isStarted: false,
}

const loginReducer = createSlice({
    name: "loginReducer",
    initialState,
    reducers: {
        startTestReducer(state: SliceState, action: PayloadAction<string>){
            state.name = action.payload;
            state.isStarted = true;
            state.isAuth = true;


            return state;
        },
        finishTestReducer(state : SliceState){
            state.isStarted = false;
            return state;
        }
    }
})

export default loginReducer.reducer;
export const {startTestReducer, finishTestReducer} = loginReducer.actions