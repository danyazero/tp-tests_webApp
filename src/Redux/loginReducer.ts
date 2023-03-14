import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useNavigate} from "react-router-dom";

type SliceState = {
    name: string,
    email: string,
    edited: boolean,
    isAuth: boolean,
    isStarted: boolean
}

const initialState: SliceState = {
    name: "",
    email: "",
    edited: false,
    isAuth: false,
    isStarted: false,
}

const loginReducer = createSlice({
    name: "loginReducer",
    initialState,
    reducers: {
        startTestReducer(state: SliceState, action: PayloadAction<any>){
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