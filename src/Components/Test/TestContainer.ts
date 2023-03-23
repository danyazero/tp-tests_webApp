import {connect} from "react-redux";
import Test from "./Test";
import {
    addAnswerReducer,
    getQuestionAPI, sendResultAPI,
} from "../../Redux/testReducer";
import {Dispatch} from "@reduxjs/toolkit";
import {RootState} from "../../Redux/store";

export type  propsTest = {
    isAuth: boolean,
    isStarted: boolean,
    question: string,
    curPos: number,
    amount: number,
    buttons: Array<string>
}
function mapStateToProps(state: RootState): propsTest{
    return{
        isAuth: state.login.isAuth,
        isStarted: state.login.isStarted,
        question: state.test.testType.question,
        curPos: state.test.curQuest,
        amount: state.test.amount,
        buttons: state.test.testType.buttons
    }
}

export type dPropsTest = {
    addAnswer(id: number): void,
    analyzeResult(): void,
    getQuestion(cur: number): void
}

function mapDispatchToProps(dispatch: Dispatch<any>): dPropsTest{
    return{
        addAnswer(id: number){
            dispatch(addAnswerReducer(id))
        },
        analyzeResult(){
            dispatch(sendResultAPI())
        },
        getQuestion(cur: number){
            dispatch(getQuestionAPI(cur))
        }
    }
}

export const TestContainer = connect(mapStateToProps, mapDispatchToProps)(Test)