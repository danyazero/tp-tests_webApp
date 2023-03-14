import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getDataAboutTestReq, getQuestionReq, getTestsListReq, sendResultReq} from "./api";
import {RootState} from "./store";

type SliceState = {
    testType: { type: number; question: string; instruction: string; buttons: Array<string>},
    amount: number,
    curQuest: number,
    answers: Array<Object>
    res: Array<any>,
    testsList: Array<any>
}

const initialState: SliceState = {
    testType: {
        type: 1,
        question: "",
        instruction: "",
        buttons: []
    },
    amount: 88,
    curQuest: 0,
    answers: [],
    res: [],
    testsList: [
        // {name: "опросник Г. Шмишека", id: 1},
        // {name: "Методика диагностики личности на мотивацию к избеганию неудач Т. Элерса", id: 2}
    ]
}
const testReducer = createSlice({
    name: "testReducer",
    initialState,
    reducers: {
        addAnswerReducer(state: SliceState, action: {payload: number}){
            state.answers.push(action.payload);
            state.curQuest += 1;

            return state;
        },
        testSettingsSetter(state: SliceState, action: PayloadAction<any>){
            state.testType.type = action.payload.type;
            state.testType.buttons = action.payload.buttons;

            return state;
        },
        setCurQuestionReducer(state: SliceState, action: PayloadAction<any>){
            state.testType.question = action.payload;

            return state;
        },
        setResultsReducer(state: SliceState, action: PayloadAction<any>){
            state.res = action.payload;

            return state;
        },
        setTestsListReducer(state: SliceState, action: PayloadAction<any>){
            state.testsList = action.payload;

            return state;
        },
        setTestsSettingsReducer(state: SliceState, action: PayloadAction<any>){
            state.testType.type = action.payload.id;
            state.testType.buttons = action.payload.buttons;
            state.amount = action.payload.amount;
            state.testType.instruction = action.payload.instruction;

            return state;
        }
    }
})

export const getQuestionAPI = createAsyncThunk(
    'testReducer/getQuestion',
    async (data: any, thunkAPI: any) => {
        let res = await getQuestionReq(thunkAPI.getState().test.testType.type, data)
        thunkAPI.dispatch(setCurQuestionReducer(res.data.quest))
    }
)

export const sendResultAPI = createAsyncThunk(
    'testReducer/sendResult',
    async (data: undefined, thunkAPI: any) => {
        let res = await sendResultReq(thunkAPI.getState().test.answers, thunkAPI.getState().test.testType.type, thunkAPI.getState().login.name, thunkAPI.getState().login.email)
        let result = res.data.result
        thunkAPI.dispatch(setResultsReducer(result))
    }
)

export const getTestsList = createAsyncThunk(
    'testReducer/getTestsList',
    async (data: undefined, thunkAPI: any) => {
        let res = await getTestsListReq()
        thunkAPI.dispatch(setTestsListReducer(res.data))
    }
)

export const initTestAPI = createAsyncThunk(
    'testReducer/initTest',
    async(data: any, thunkAPI: any) => {
        let res = await getDataAboutTestReq(data)
        thunkAPI.dispatch(setTestsSettingsReducer(res.data))
    }
)
export default testReducer.reducer
export const {setTestsListReducer, addAnswerReducer, setResultsReducer, setCurQuestionReducer, setTestsSettingsReducer} = testReducer.actions