import {connect} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import {RootState} from "../../Redux/store";
import {finishTestReducer} from "../../Redux/loginReducer";
import {clearTestResults} from "../../Redux/testReducer";
import Error from "./Error";

function mapStateToProps(state: RootState){
    return{

    }
}
export type dPropsError = {
    clearStartStatus(): void
}
function mapDispatchToProps(dispatch: Dispatch<any>): dPropsError{
    return{
        clearStartStatus(){
            dispatch(finishTestReducer())
            dispatch(clearTestResults())
        }
    }
}

export const ErrorContainer = connect(mapStateToProps, mapDispatchToProps)(Error)