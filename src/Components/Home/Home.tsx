import React, {FC, FormEventHandler, useEffect, useState} from 'react';
import st from './Home.module.css'
import {
    Link,
    NavLink, useNavigate,
} from "react-router-dom";
import {dPropsHome, propsHome} from "./HomeContainer";

const Home: FC<propsHome & dPropsHome> = (props) => {
    const navigate = useNavigate();

    useEffect(() => {

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

    const [name, setName] = useState("")

    return (
        <div className={"centralPanel"}>
            <div className={st.loginForm}>
                <form className={st.formArea} onSubmit={(e:  React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    props.setUser(name)
                    navigate("/test")

                }}>
                    <div className={st.inputArea}>
                        <input type={"text"} name={"first_name"} placeholder={"Имя"} className={st.nameField} value={name}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                   setName(e.target.value)
                                   console.log(name)
                               }} required/>
                    </div>
                    <button className={st.startButton} type="submit">Начать</button>
                </form>
            </div>
        </div>
    )
};

export default Home;