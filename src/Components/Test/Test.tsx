import React, {FC, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import st from "./Test.module.css"
import {dPropsTest, propsTest} from "./TestContainer";

const Test: FC<propsTest & dPropsTest> = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.isStarted) {
            navigate("/");
        }
    }, [])

    useEffect(() => {
        if (props.curPos >= props.amount-1) {
            props.analyzeResult()
            navigate("/result")
        }
        props.getQuestion(props.curPos)
    }, [props.curPos])

    function buttonClickHandler(event: any) {
        let id = event.target.id
        props.addAnswer(id)
    }

    const buttons = props.buttons.map((el, id) => <button key={id} id={id+1 + ""} onClick={buttonClickHandler}
                                                          className={st.answerButton}>{el}</button>)


    return (
        <div className={"centralPanel"}>
            <h2>Вопрос: {props.curPos + 1}</h2>
            <p className={st.textArea}>
                {props.question}
            </p>
            <div className={st.answerForm}>
                {buttons}
            </div>
        </div>
    )
};

export default Test;