import {connect} from "react-redux";
import Result from "./Result";
import {Dispatch} from "@reduxjs/toolkit";
import {RootState} from "../../Redux/store";
import {resultArray, testsList} from "../../Models/Models";

export type propsResult = {
    result: Array<resultArray>,
    isStarted: boolean,
    type: number,
    name: string,
    email: string
    test: Array<testsList>
}

function mapStateToProps(state: RootState): propsResult{
    return{
        result: state.test.res,
        isStarted: state.login.isStarted,
        type: state.test.testType.type,
        test: state.test.testsList,
        name: state.login.name,
        email: state.login.email,
    }
}

function mapDispatchToProps(dispatch: Dispatch<any>){
    return{

    }
}

export const ResultContainer = connect(mapStateToProps, mapDispatchToProps)(Result)