import React from 'react';
import st from "./Card.module.css"
import {NavLink} from "react-router-dom";

interface CardProps{
    name: string,
    author: string,
    id: number,
    setTest(id: number): void
}

const Card = (props: CardProps) => {

    function onNavLinkClickHandler(){
        props.setTest(props.id);
    }
    return(
        <NavLink onClick={onNavLinkClickHandler} to={'/auth'} className={st.card}>
            <div className={st.idArea}>#{props.id}</div>
            <div className={st.textArea}>
                <div className = {st.nameArea}>{props.name}</div>
                <div className = {st.author}>{props.author}</div>
            </div>
        </NavLink>
    )
};

export default Card;