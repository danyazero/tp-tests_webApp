import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {dPropsError} from "./ErrorContainer";

const Error:FC<dPropsError> = ({clearStartStatus}) => {
    const navigate = useNavigate()
    function onBackButtonClickHandler(){
        clearStartStatus()
        navigate("/")
    }
    return(
        <div className={"centralPanel"}>
            <h1>404 Page Not Found</h1>
            <a className = {"button"} onClick={onBackButtonClickHandler}>Start page</a>
        </div>
    )
};

export default Error;