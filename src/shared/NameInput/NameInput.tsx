import {FC} from "react";
import {INameInput} from "./NameInput.interface";
import st from ".//NameInput.module.css"

export const NameInput: FC<INameInput> = (props) => {
    return (
        <>
            <input type={"text"} name={"first_name"} placeholder={props.placeholder} className={st.nameField}
                   value={props.value}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                       props.onChange(event.target.value)
                   }} required/>
        </>
    );
}