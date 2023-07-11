import React, {FC} from 'react';
import st from "./Social.module.css"

type propsSocialType = {
    caption: string,
    href: string,
    image: string
}

const Social: FC<propsSocialType> = (props) => {
    return (
        <a href={props.href}><div className={st.social}>
            <img alt={props.caption} className={st.socialImage} src={props.image}/>
        </div>
        </a>
    )
};

export default Social;