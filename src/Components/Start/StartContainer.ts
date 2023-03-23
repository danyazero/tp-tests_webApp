import {connect} from "react-redux";
import Start from "./Start";
import {getTestsList, initTestAPI} from "../../Redux/testReducer";
import {RootState} from "../../Redux/store";
import {Dispatch} from "@reduxjs/toolkit";

export interface propsStart {
    tests: Array<any>
}
function mapStateToProps(state: RootState): propsStart{
    return{
        tests: state.test.testsList
    }
}

export interface dPropsStart{
    getTestsList(): void,
    setTestsSettings(id: number): void
}

function mapDispatchToProps(dispatch : Dispatch<any>): dPropsStart{
    return{
        getTestsList(){
            dispatch(getTestsList())
        },
        setTestsSettings(type: number){
            dispatch(initTestAPI(type))
        }
    }
}

export const StartContainer = connect(mapStateToProps, mapDispatchToProps)(Start)