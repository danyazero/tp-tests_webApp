import {connect} from "react-redux";
import Result from "./Result";
import {Dispatch} from "@reduxjs/toolkit";
import {RootState} from "../../Redux/store";

export type resultObject = {id : number, name: string, count: number}

export type propsResult = {
    result: Array<resultObject>,
    isStarted: boolean,
    type: number
}

function mapStateToProps(state: RootState): propsResult{
    return{
        result: state.test.res,
        isStarted: state.login.isStarted,
        type: state.test.testType.type,
    }
}

function mapDispatchToProps(dispatch: Dispatch<any>){
    return{

    }
}

export const ResultContainer = connect(mapStateToProps, mapDispatchToProps)(Result)