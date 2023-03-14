import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import {configureStore} from "@reduxjs/toolkit";
import testReducer from "./testReducer";
import adminReducer from "./adminReducer";


const reducers = combineReducers({
    login: loginReducer,
    test: testReducer,
    admin: adminReducer,
})

let store = configureStore({
    reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export default store