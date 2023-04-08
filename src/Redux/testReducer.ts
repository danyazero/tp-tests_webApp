import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getDataAboutTestReq, getQuestionReq, getTestsListReq, sendResultReq} from "./api";
import {resultArray, testSettings, testsList, testType} from "../Models/Models";
import {AxiosResponse} from "axios";

type SliceState = {
    testType: testType,
    amount: number,
    curQuest: number,
    answers: Array<number>
    res: Array<resultArray>,
    isLoading: boolean,
    testsList: Array<testsList>
}

const initialState: SliceState = {
    testType: {
        type: 1,
        question: "",
        buttons: []
    },
    isLoading: false,
    amount: 88,
    curQuest: 0,
    answers: [],
    res: [],
    testsList: []
}
const testReducer = createSlice({
    name: "testReducer",
    initialState,
    reducers: {
        addAnswerReducer(state: SliceState, action: PayloadAction<number>){
            state.isLoading = true;
            state.answers.push(action.payload);
            state.curQuest += 1;

            return state;
        },
        setCurQuestionReducer(state: SliceState, action: PayloadAction<string>){
            state.testType.question = action.payload;

            return state;
        },
        setResultsReducer(state: SliceState, action: PayloadAction<resultArray[]>){
            state.res = action.payload;

            return state;
        },
        setTestsListReducer(state: SliceState, action: PayloadAction<Array<testsList>>){
            state.testsList = action.payload;

            return state;
        },
        setTestsSettingsReducer(state: SliceState, action: PayloadAction<testSettings>){
            state.testType.type = action.payload.id;
            state.testType.buttons = action.payload.buttons;
            state.amount = action.payload.amount;

            return state;
        },
        setLoadingStatusReducer(state : SliceState, action : PayloadAction <boolean>){
            state.isLoading = action.payload

            return state;
        }
    }
})

export const getQuestionAPI = createAsyncThunk(
    'testReducer/getQuestion',
    async (_data: number, thunkAPI: any) => {
        let {data}: AxiosResponse<{quest: string}> = await getQuestionReq(thunkAPI.getState().test.testType.type, _data)
        thunkAPI.dispatch(setLoadingStatusReducer(false))
        thunkAPI.dispatch(setCurQuestionReducer(data.quest))
    }
)

export const sendResultAPI = createAsyncThunk(
    'testReducer/sendResult',
    async (_data: undefined, thunkAPI: any) => {
        thunkAPI.dispatch(setLoadingStatusReducer(true))
        let res = await sendResultReq(thunkAPI.getState().test.answers, thunkAPI.getState().test.testType.type, thunkAPI.getState().login.name, thunkAPI.getState().login.email)
        let result = res.data.result
        thunkAPI.dispatch(setLoadingStatusReducer(false))
        thunkAPI.dispatch(setResultsReducer(result))
    }
)

export const getTestsList = createAsyncThunk(
    'testReducer/getTestsList',
    async (_data: undefined, thunkAPI: any) => {
        thunkAPI.dispatch(setLoadingStatusReducer(true))
        let {data}: AxiosResponse<testsList[]> = await getTestsListReq()
        thunkAPI.dispatch(setLoadingStatusReducer(false))
        thunkAPI.dispatch(setTestsListReducer(data))
    }
)

export const initTestAPI = createAsyncThunk(
    'testReducer/initTest',
    async(_data: number, thunkAPI: any) => {
        thunkAPI.dispatch(setLoadingStatusReducer(true))
        let {data}: AxiosResponse<testSettings> = await getDataAboutTestReq(_data)
        thunkAPI.dispatch(setLoadingStatusReducer(false))
        thunkAPI.dispatch(setTestsSettingsReducer(data))
    }
)
export default testReducer.reducer
export const {setTestsListReducer, setLoadingStatusReducer, addAnswerReducer, setResultsReducer, setCurQuestionReducer, setTestsSettingsReducer} = testReducer.actions