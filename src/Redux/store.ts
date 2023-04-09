import {combineReducers} from "redux";
import loginReducer, {loginSliceState} from "./loginReducer";
import {configureStore} from "@reduxjs/toolkit";
import testReducer, {testSliceState} from "./testReducer";


const reducers = combineReducers({
    login: loginReducer,
    test: testReducer,
})

let store = configureStore({
    reducer: reducers
})

export type RootState = {login: loginSliceState, test: testSliceState}
export default store