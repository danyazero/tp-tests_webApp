import React, {FC, useEffect} from 'react';
import st from "./Result.module.css"
import {useNavigate} from "react-router-dom";
import {dPropsResult, propsResult} from "./ResultContainer";
import ListItem from "../../HelpComponents/ListItem/ListItem";
import Loading from "../../HelpComponents/Loading/Loading";

const Result: FC<propsResult & dPropsResult> = ({name, result,...props}) => {

    const navigate = useNavigate();
    useEffect(()=>{
        if (!props.isStarted){
            navigate("/");
        }
    }, [])

    function renderResultLink(){
        const enter = "%0D%0A";
        let resultString = ""
        const testType = props.test.filter(m => m.id !== props.type)[0]
        for (let i = 0; i < result.length; i++){
            resultString += ("%20-%20" + result[i].name + "%20" + result[i].points + enter);
        }

        return "mailto:formulamgo2@gmail.com?subject=Psychological%20test&body=" + "Name: " + name + enter + "Test: " + testType.name + enter + "Author: " + testType.author + enter + "Results: " + enter + resultString
    }

    const resultArray = result.map((el, id)=> <ListItem key={"results_"+id} name={el.name} points={el.points}/>)
    return(
        <div id={st.centralPanel} className={"centralPanel"}>
            <div className={st.header}>
                <h3 style={{margin: "0px"}}>{name}</h3>
                <a className={st.backButton} onClick={()=>{
                    props.setTestStatus(false)
                    navigate("/")
                }}>Back</a>
            </div>
            <hr style={{opacity: "40%", marginTop: "20px"}}/>
            {props.isLoading ? <Loading/> : resultArray}
            {props.test.length > 0 ? <a className="button" href = {renderResultLink()}>Share</a> : ""}
        </div>
    )
};

export default Result;