import {FC, useEffect} from 'react';
import st from "./Result.module.css"
import {useNavigate} from "react-router-dom";
import {dPropsResult, propsResult} from "./ResultContainer";
import {ListItem} from "../../../entities/ListItem";
import Loading from "../../../shared/Loading/Loading";
import Socials from "../../../shared/Socials/Socials";
import {sendEmailLinkGenerator} from "../models/sendEmailLinkRenerator";

export const Result: FC<propsResult & dPropsResult> = ({name, result, ...props}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (props.error) navigate("/error")
    }, [props.error])

    useEffect(() => {
        if (!props.isStarted) {
            navigate("/");
        }
    }, [])

    function backButtonHandler() {
        props.setTestStatus(false)
        navigate("/")
    }

    const caption = props.caption.replaceAll(";", ";~").split("~").map((element, index) => <p
        key={"points-range-" + index} className={"without-text-decoration"}>{element + "\n"}</p>)

    const resultArray = result.map((el, id) => <ListItem key={"results_" + id} name={el.name} points={el.points}/>)
    return (
        <>
            <Socials/>
            <div id={st.centralPanel} className={"centralPanel"}>
                <div className={st.header}>
                    <h3 style={{margin: "0px"}}>{name}</h3>
                    <a className={st.backButton} onClick={backButtonHandler}>Back</a>
                </div>
                <hr style={{opacity: "40%", marginTop: "20px"}}/>
                <p>{props.caption.length > 0 ? caption : ""}</p>
                {props.isLoading ? <Loading/> : resultArray}
                {props.test.length > 0 ? <a className="button" href={sendEmailLinkGenerator(props.type, name, props.test, result)}>Share</a> : ""}
            </div>
        </>
    )
};