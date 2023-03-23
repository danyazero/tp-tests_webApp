import React, {FC, useEffect} from 'react';
import st from "./Result.module.css"
import {useNavigate} from "react-router-dom";
import {propsResult} from "./ResultContainer";
import ListItem from "../../HelpComponents/ListItem/ListItem";

const Result: FC<propsResult> = ({name, email, result,...props}: propsResult) => {

    const navigate = useNavigate();
    useEffect(()=>{
        if (!props.isStarted){
            navigate("/");
        }
    }, [])

    const resultArray = result.map((el, id)=> <ListItem key={id} name={el.name} points={el.points}/>)
    return(
        <div id={st.centralPanel} className={"centralPanel"}>
            <div>
                <h3 style={{margin: "0px"}}>{name}</h3>
                <p style={{margin: "0px"}}>{email}</p>
            </div>
            <hr style={{opacity: "40%", marginTop: "20px"}}/>
            {resultArray}
        </div>
    )
};

export default Result;