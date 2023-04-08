import React, {FC, useEffect} from 'react';
import st from "./Start.module.css"
import Card from "../../HelpComponents/Card/Card";
import {dPropsStart, propsStart} from "./StartContainer";
import Loading from "../../HelpComponents/Loading/Loading";

const Start: FC<propsStart & dPropsStart> = (props) => {

    useEffect(() => {
        props.getTestsList();
    }, [])

    const cards = props.tests.map((el, id) => <Card key={id} setTest={props.setTestsSettings} id={el.id}
                                                    author={el.author} name={el.name}/>)
    return (
        <div id={st.centralPanel} className={"centralPanel"}>
            {
                props.isLoading ? <Loading/> :
                    <div className={st.startPanel}>
                        {cards}
                    </div>
            }

        </div>
    )
};

export default Start;