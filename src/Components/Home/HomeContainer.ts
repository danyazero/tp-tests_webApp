import {connect} from "react-redux";
import Home from "./Home";
import { startTestReducer} from "../../Redux/loginReducer";
import {RootState} from "../../Redux/store";
import {Dispatch} from "@reduxjs/toolkit";
import {testsList} from "../../Models/Models";

export type propsHome = {
    name: string,
    isAuth: boolean,
    isStarted: boolean,
    isInitialized: Array<testsList>,
    error: boolean
}
function mapStateToProps(state: RootState): propsHome{
    return{
        name : state.login.name,
        isAuth: state.login.isAuth,
        isStarted: state.login.isStarted,
        isInitialized: state.test.testsList,
        error: state.test.error
    }
}

export interface dPropsHome{
    setUser(name : string): void
}

function mapDispatchToProps(dispatch: Dispatch<any>):dPropsHome{
    return{
        setUser(name: string){
            dispatch(startTestReducer(name))
        }
    }
}


export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)