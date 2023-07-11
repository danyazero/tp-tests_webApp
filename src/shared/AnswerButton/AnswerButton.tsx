import React, {FC} from "react";
import st from ".//AnswerButton.module.css"
import {IAnswerButton} from "./AnswerButton.interface";

export const AnswerButton: FC<IAnswerButton> = (props) => {
    return (
        <>
            <button disabled={props.isDisabled} id={props.id + 1 + ""} onClick={props.onClick}
                    className={st.answerButton}>{props.title}</button>
        </>
    );
}