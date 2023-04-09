import {connect} from "react-redux";
import Result from "./Result";
import {Dispatch} from "@reduxjs/toolkit";
import {RootState} from "../../Redux/store";
import {resultArray, testsList} from "../../Models/Models";
import {finishTestReducer} from "../../Redux/loginReducer";
import {clearTestResults} from "../../Redux/testReducer";

export type propsResult = {
    result: Array<resultArray>,
    isStarted: boolean,
    type: number,
    name: string,
    isLoading: boolean,
    test: Array<testsList>,
    error: boolean
}

function mapStateToProps(state: RootState): propsResult{
    return{
        result: state.test.res,
        isStarted: state.login.isStarted,
        isLoading: state.test.isLoading,
        type: state.test.testType.type,
        test: state.test.testsList,
        name: state.login.name,
        error: state.test.error
    }
}

export type dPropsResult = {
    setTestStatus(status: boolean): void
}

function mapDispatchToProps(dispatch: Dispatch<any>){
    return{
        setTestStatus(status: boolean){
            dispatch(finishTestReducer())
            dispatch(clearTestResults())
        }
    }
}

export const ResultContainer = connect(mapStateToProps, mapDispatchToProps)(Result)