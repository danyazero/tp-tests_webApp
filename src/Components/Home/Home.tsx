import React, {FC, FormEventHandler, useEffect, useState} from 'react';
import st from './Home.module.css'
import {
    Link,
    NavLink, useNavigate,
} from "react-router-dom";
import {propsHome} from "./HomeContainer";

const Home: FC<propsHome & { setUser: Function }> = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (props.isStarted) {
            navigate("/test")
        }
    }, [props.isStarted, navigate])

    useEffect(() => {
        if (props.isInitialized.length == 0) {
            navigate("/start");
        }
    }, [])

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    return (
        <div className={"centralPanel"}>
            <div className={st.loginForm}>
                <form className={st.formArea} onSubmit={(e) => {
                    e.preventDefault();
                    props.setUser(name, email)
                    navigate("/test")

                }}>
                    <div className={st.inputArea}>
                        <input type={"text"} placeholder={"Имя"} className={st.nameField} value={name}
                               onChange={(e) => {
                                   setName(e.target.value)
                                   console.log(name)
                               }} required/>
                        <input type="email" placeholder={"Почта"} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                               className={st.nameField} value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} required/>
                    </div>
                    <button className={st.startButton} type="submit">Начать</button>
                </form>
            </div>
        </div>
    )
};

export default Home;