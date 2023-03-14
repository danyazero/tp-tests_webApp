import {connect} from "react-redux";
import Home from "./Home";
import { startTestReducer} from "../../Redux/loginReducer";
import {reduxForm} from "redux-form";
import {RootState} from "../../Redux/store";
import {Dispatch} from "@reduxjs/toolkit";

export type propsHome = {
    name: string,
    instruction: string,
    isAuth: boolean,
    edited: boolean,
    isStarted: boolean,
    isInitialized: Array<any>
}
function mapStateToProps(state: RootState): propsHome{
    return{
        name : state.login.name,
        instruction: state.test.testType.instruction,
        isAuth: state.login.isAuth,
        edited: state.login.edited,
        isStarted: state.login.isStarted,
        isInitialized: state.test.testsList,
    }
}

function mapDispatchToProps(dispatch: Dispatch<any>){
    return{
        setUser(name: string, email: string){
            dispatch(startTestReducer({name, email}))
        }
    }
}


export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)