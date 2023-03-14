import React from 'react';
import st from "./Card.module.css"
import {NavLink} from "react-router-dom";

const Card = (props: {id : string, name: string, author: string, setTest: Function}) => {

    function onNavlinkClickHandler(){
        props.setTest(props.id);
    }
    return(
        <NavLink onClick={onNavlinkClickHandler} to={'/auth'} className={st.card}>
            <div className={st.idArea}>#{props.id}</div>
            <div className = {st.nameArea}>{props.name}</div>
            <div className = {st.author}>{props.author}</div>
        </NavLink>
    )
};

export default Card;