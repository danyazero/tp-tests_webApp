import React, {FC, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import st from "./Test.module.css"
import {dPropsTest, propsTest} from "./TestContainer";
import Loading from "../../../shared/Loading/Loading";
import {AnswerButton} from "../../../shared/AnswerButton/AnswerButton";

export const Test: FC<propsTest & dPropsTest> = (props) => {
    const navigate = useNavigate();

    useEffect(()=>{
        if (props.error) navigate("/error")
    },[props.error])

    useEffect(() => {
        if (!props.isStarted) {
            navigate("/");
        }
    }, [])

    useEffect(() => {
        if (props.curPos >= props.amount) {
            props.analyzeResult()
            navigate("/result")
        }
        props.getQuestion(props.curPos)
    }, [props.curPos])

    function buttonClickHandler(event:  React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        let id: number = event.target.id
        props.addAnswer(id)
    }

    function renderButtons(){
        if (props.buttons){
            return props.buttons.map((element, index) => <AnswerButton key={"answer_button_" + index} onClick={buttonClickHandler} id={index} isDisabled={props.isLoading} title={element}/>)
        }
    }


    return (
        <div className={st.container}>
            <div className={st.questionPanel}>
                <h2>Question: {props.isLoading ? props.curPos : props.curPos + 1}</h2>
                {props.isLoading ? <Loading/> : <></>}
                <p className={st.textArea}>
                    {props.question}
                </p>
            </div>
            <div className={st.answersPanel}>
                <div className={st.answerForm}>
                    {renderButtons()}
                </div>
            </div>
        </div>
    )
};