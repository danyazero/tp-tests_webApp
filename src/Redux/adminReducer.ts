import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loginWithCredsReq, loginWithoutCredsReq} from "./api";
import Cookies from "universal-cookie/es6";

interface userThatAnswered {
    id: number,
    name : string,
    email : string,
    tests: number
}

type SliceState = {
    adminName: string,
    isAuth: boolean,
    currentUser: number,
    usersAnswersList: Array<userThatAnswered>
}

const initialState: SliceState= {
    adminName: "",
    isAuth: false,
    currentUser: 0,
    usersAnswersList: [
        {id: 1, name: "Danya", email: "formulamgo2@gmail.com", tests: 3},
        {id: 2, name: "Artem", email: "artemLox@gmail.com", tests: 3}
    ],
}

const adminReducer = createSlice({
    name: "adminReducer",
    initialState,
    reducers: {
        adminAuthorizeStatus(state: SliceState, action: PayloadAction<any>) {
            state.isAuth = true;
            state.adminName = action.payload.name;
            if (action.payload.token) {
                const cookies = new Cookies();
                cookies.set('token', action.payload.token, {path: '/', maxAge: 99999999});
            }

            return state;
        }
    }
})

export const adminAuth = createAsyncThunk(
    'admin/adminAuth',
    async (arg: {username: string, password: string, remember: boolean}, thunkAPI) => {
        let data = await loginWithoutCredsReq(arg.username, arg.password, arg.remember)
        thunkAPI.dispatch(adminAuthorizeStatus(data.data))
    }
)

export const loginWithCreds = createAsyncThunk(
    'admin/loginWithCreds',
    async (arg, thunkAPI) => {
        let data = await loginWithCredsReq()
        thunkAPI.dispatch(adminAuthorizeStatus(data.data))
    }
)

export default adminReducer.reducer;
export const {adminAuthorizeStatus} = adminReducer.actions