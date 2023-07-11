import {FC, useEffect, useState} from 'react';
import st from './Home.module.css'
import {useNavigate} from "react-router-dom";
import {dPropsHome, propsHome} from "./HomeContainer";
import Socials from "../../../shared/Socials/Socials";
import {NameInput} from "../../../shared/NameInput/NameInput";

export const Home: FC<propsHome & dPropsHome> = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (props.error) navigate("/error")
        if (props.isAuth) {
            props.setUser(props.name)
            navigate("/test")
        }
    }, [])

    useEffect(() => {
        if (props.isInitialized.length === 0) {
            navigate("/start");
        }
    }, [])

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.setUser(name)
        navigate("/test")

    }

    const [name, setName] = useState("")

    return (
        <>
            <Socials/>
            <div className={"centralPanel"}>
                <div className={st.loginForm}>
                    <form className={st.formArea} onSubmit={onSubmitHandler}>
                        <NameInput value={name} onChange={(value: string) => setName(value)} placeholder={"Name"}/>
                        <button className={st.startButton} type="submit">Start</button>
                    </form>
                </div>
            </div>
        </>
    )
};