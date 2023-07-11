import {FC, useEffect} from 'react';
import st from "./Start.module.css"
import {Card} from "../../../entities/Card";
import {dPropsStart, propsStart} from "./StartContainer";
import Loading from "../../../shared/Loading/Loading";
import {useNavigate} from "react-router-dom";
import Socials from "../../../shared/Socials/Socials";

export const Start: FC<propsStart & dPropsStart> = (props) => {
    const navigate = useNavigate()

    useEffect(() => {
        props.getTestsList();
    }, [])

    useEffect(() => {
        if (props.error) navigate("/error")
    }, [props.error])

    const cards = props.tests.map((el, id) => <Card key={id} amount={el.amount} setTest={props.setTestsSettings}
                                                    id={el.id}
                                                    author={el.author} name={el.name}/>)
    return (
        <>
            <Socials/>
            <div id={st.centralPanel} className={"centralPanel"}>
                <div className={st.startPanel}>
                    {props.isLoading ? <Loading/> : <>{cards}</>}
                </div>
            </div>
        </>
    )
};