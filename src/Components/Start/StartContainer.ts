import {connect} from "react-redux";
import Start from "./Start";
import {getTestsList, initTestAPI, setTestsSettingsReducer} from "../../Redux/testReducer";
import {RootState} from "../../Redux/store";
import {Dispatch} from "@reduxjs/toolkit";

function mapStateToProps(state: RootState){
    return{
        tests: state.test.testsList
    }
}

function mapDispatchToProps(dispatch : Dispatch<any>){
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