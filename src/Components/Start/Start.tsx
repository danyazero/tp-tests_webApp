import React, {FC, useEffect} from 'react';
import Card from "./Card/Card";
import st from "./Start.module.css"

type propsStart = {
    tests: Array<any>,
    getTestsList: Function,
    setTestsSettings: Function
}
const Start: FC<propsStart> = (props) => {

    useEffect(() => {
        props.getTestsList();
    }, [])

    const cards = props.tests.map((el, id) => <Card key={id} setTest={props.setTestsSettings} id={el.id} author={el.author} name={el.name}/>)
    return(
        <div className={st.centralPanel}>
            {cards}
        </div>
    )
};

export default Start;