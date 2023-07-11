import {NavLink} from "react-router-dom";
import st from "./Card.module.css"
import {CardProps} from "../../../Models/Models";



export const Card = (props: CardProps) => {

    function onNavLinkClickHandler(){
        props.setTest(props.id, props.amount);
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