import React, {FC, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import st from "./Test.module.css"
import {dPropsTest, propsTest} from "./TestContainer";
import Loading from "../../HelpComponents/Loading/Loading";

const Test: FC<propsTest & dPropsTest> = (props) => {
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

    function buttonClickHandler(event: any) {
        let id: number = event.target.id
        props.addAnswer(id)
    }

    function renderButtons(){
        if (props.buttons){
            return props.buttons.map((el, id) => <button key={id} disabled={props.isLoading} id={id + 1 + ""} onClick={buttonClickHandler}
                                                         className={st.answerButton}>{el}</button>)
        }
    }


    return (
        <div className={st.container}>
            <div className={st.questionPanel}>
                <h2>Вопрос: {props.isLoading ? props.curPos : props.curPos + 1}</h2>
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

export default Test;