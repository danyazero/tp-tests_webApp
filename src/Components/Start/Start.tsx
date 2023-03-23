import React, {FC, useEffect} from 'react';
import st from "./Start.module.css"
import Card from "../../HelpComponents/Card/Card";

type propsStart = {
    tests: Array<any>,
    getTestsList: Function,
    setTestsSettings(id: number): void
}
const Start: FC<propsStart> = (props) => {

    useEffect(() => {
        props.getTestsList();
    }, [])

    const cards = props.tests.map((el, id) => <Card key={id} setTest={props.setTestsSettings} id={el.id} author={el.author} name={el.name}/>)
    return(
        <div id={st.centralPanel} className={"centralPanel"}>
            <div className={st.startPanel}>
                {cards}
            </div>
        </div>
    )
};

export default Start;