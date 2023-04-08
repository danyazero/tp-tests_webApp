import React from 'react';
import {useNavigate} from "react-router-dom";

const Error = () => {
    const navigate = useNavigate()
    return(
        <div className={"centralPanel"}>
            <h1>404 Page Not Found</h1>
            <a className = {"button"} onClick={()=>{navigate("/")}}>Start page</a>
        </div>
    )
};

export default Error;