import {connect} from "react-redux";
import {Start} from "./Start";
import {getTestsList, setTestsSettingsReducer} from "../../../Redux/testReducer";
import {RootState} from "../../../Redux/store";
import {Dispatch} from "@reduxjs/toolkit";

export interface propsStart {
    tests: Array<any>,
    isLoading: boolean,
    amount: number,
    error: boolean
}
function mapStateToProps(state: RootState): propsStart{
    return{
        isLoading: state.test.isLoading,
        tests: state.test.testsList,
        amount: state.test.amount,
        error: state.test.error
    }
}

export interface dPropsStart{
    getTestsList(): void,
    setTestsSettings(id: number, amount: number): void
}

function mapDispatchToProps(dispatch : Dispatch<any>): dPropsStart{
    return{
        getTestsList(){
            dispatch(getTestsList())
        },
        setTestsSettings(id: number, amount: number){
            dispatch(setTestsSettingsReducer({id, amount}))
        }
    }
}

export const StartContainer = connect(mapStateToProps, mapDispatchToProps)(Start)