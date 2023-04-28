import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getQuestionReq, getTestsListReq, sendResultReq} from "./api";
import {resultArray, resultsRes, testSettings, testsList, testType} from "../Models/Models";
import {Axios, AxiosResponse} from "axios";

export type testSliceState = {
    testType: testType,
    amount: number,
    curQuest: number,
    answers: Array<number>
    captionForResults: string,
    res: Array<resultArray>,
    isLoading: boolean,
    error: boolean,
    testsList: Array<testsList>
}

const initialState: testSliceState = {
    testType: {
        type: 1,
        question: "",
        buttons: []
    },
    error: false,
    isLoading: false,
    amount: 88,
    curQuest: 0,
    answers: [],
    res: [],
    captionForResults: "",
    testsList: []
}
const testReducer = createSlice({
    name: "testReducer",
    initialState,
    reducers: {
        setErrorStatus(state: testSliceState, action: PayloadAction<boolean>) {
            state.error = action.payload
            return state
        },
        addAnswerReducer(state: testSliceState, action: PayloadAction<number>) {
            state.isLoading = true;
            state.answers.push(action.payload);
            state.curQuest += 1;

            return state;
        },
        setCurQuestionReducer(state: testSliceState, action: PayloadAction<{
            quest: string,
            buttons: Array<string>
        }>) {
            state.testType.question = action.payload.quest;
            state.testType.buttons = action.payload.buttons;

            return state;
        },
        setResultsReducer(state: testSliceState, action: PayloadAction<resultsRes>) {
            state.res = action.payload.results;
            state.captionForResults = action.payload.caption
            state.answers = []

            return state;
        },
        setTestsListReducer(state: testSliceState, action: PayloadAction<Array<testsList>>) {
            state.testsList = action.payload;

            return state;
        },
        setTestsSettingsReducer(state: testSliceState, action: PayloadAction<{ id: number, amount: number }>) {
            state.testType.type = action.payload.id;
            state.amount = action.payload.amount;

            return state;
        },
        setLoadingStatusReducer(state: testSliceState, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
            return state;
        },
        clearTestResults(state: testSliceState) {
            state.curQuest = 0
            state.error = false;
            state.res = []
            return state;
        }
    }
})

export const getQuestionAPI = createAsyncThunk(
    'testReducer/getQuestion',
    async (_data: number, thunkAPI: any) => {
        try {
            let {data}: AxiosResponse<{
                quest: string,
                buttons: string[]
            }> = await getQuestionReq(thunkAPI.getState().test.testType.type, _data)
            thunkAPI.dispatch(setLoadingStatusReducer(false))
            thunkAPI.dispatch(setCurQuestionReducer(data))
        } catch (error) {
            thunkAPI.dispatch(setErrorStatus(true))
        }
    }
)

export const sendResultAPI = createAsyncThunk(
    'testReducer/sendResult',
    async (_data: undefined, thunkAPI: any) => {
        try {
            thunkAPI.dispatch(setLoadingStatusReducer(true))
            let {data}: AxiosResponse<resultsRes> = await sendResultReq(thunkAPI.getState().test.answers, thunkAPI.getState().test.testType.type, thunkAPI.getState().login.name, thunkAPI.getState().login.email)
            thunkAPI.dispatch(setLoadingStatusReducer(false))
            thunkAPI.dispatch(setResultsReducer(data))
        } catch (error) {
            thunkAPI.dispatch(setErrorStatus(true))
        }
    }
)

export const getTestsList = createAsyncThunk(
    'testReducer/getTestsList',
    async (_data: undefined, thunkAPI: any) => {
        try {
            thunkAPI.dispatch(setLoadingStatusReducer(true))
            let {data}: AxiosResponse<testsList[]> = await getTestsListReq()
            thunkAPI.dispatch(setLoadingStatusReducer(false))
            thunkAPI.dispatch(setTestsListReducer(data))
        } catch (error) {
            thunkAPI.dispatch(setErrorStatus(true))
        }
    }
)

export default testReducer.reducer
export const {
    setTestsListReducer,
    setErrorStatus,
    clearTestResults,
    setLoadingStatusReducer,
    addAnswerReducer,
    setResultsReducer,
    setCurQuestionReducer,
    setTestsSettingsReducer
} = testReducer.actions