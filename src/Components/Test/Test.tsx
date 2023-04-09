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
        if (props.curPos >= props.amount - 1) {
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
            return props.buttons.map((el, id) => <button key={id} id={id + 1 + ""} onClick={buttonClickHandler}
                                                         className={st.answerButton}>{el}</button>)
        }
    }


    return (
        <div id={st.centralPanel} className={"centralPanel"}>
            <h2>Вопрос: {props.isLoading ? props.curPos : props.curPos + 1}</h2>
            {props.isLoading ? <Loading/> : <></>}
            <p className={st.textArea}>
                {props.question}
            </p>
            <div className={st.answerForm}>
                {renderButtons()}
            </div>
        </div>
    )
};

export default Test;