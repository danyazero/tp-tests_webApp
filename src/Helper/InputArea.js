import React from "react";
import st from "./inputArea.module.css"

export const inputArea = ({input, meta, ...props}) => {

    function areaValidator(){
        if ((meta.touched === true) && (meta.valid === false)){
            return true
        }else return false;
    }

    return (
        <div className={st.formControl + (areaValidator() ?  " " + st.error : "")}>
            <input {...input} {...props} />
            {
                areaValidator() ? <div  className={st.errorName}>! {meta.error}</div> : <></>
            }
        </div>
)
}