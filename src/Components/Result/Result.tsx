import React, {FC, useEffect} from 'react';
import st from "./Result.module.css"
import {useNavigate} from "react-router-dom";
import ResultItem from "./ResultItem/ResultItem";
import {propsResult} from "./ResultContainer";

const Result: FC<propsResult> = (props) => {

    const navigate = useNavigate();
    useEffect(()=>{
        if (!props.isStarted){
            navigate("/");
        }
    }, [])

    const resultArray = props.result.map((el, id)=> <ResultItem key={id} id={id+1} name={el.name} count={el.count}/>)
    return(
        <div>
            {resultArray}
        </div>
    )
};

export default Result;