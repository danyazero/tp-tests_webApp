import React, {FC} from 'react';
import st from "./ResultItem.module.css"
import {resultObject} from "../ResultContainer";

const ResultItem: FC<resultObject> = (props) => {
    return (
        <div className={st.grigItem}>
            <p className={st.itemNumber}>#{props.id}</p>
            <p className={st.itemName}>{props.name}</p>
            <p className={st.itemPoints}>{props.count}</p>
        </div>
    )
};

export default ResultItem;