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

    useEffect(()=>{
        if (props.isInitialized.length == 0){
            navigate("/start");
        }
    }, [])

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    return (
        <div className={"centralPanel"}>
            <h2>ИНСТРУКЦИЯ:</h2>
            <p className={st.textArea}>{props.instruction}
            </p>
            <div className={st.loginForm}>
                <form className={st.formArea} onSubmit={(e) => {
                    e.preventDefault();
                    props.setUser(name, email)
                    navigate("/test")

                }}>
                    <div className={st.inputArea}>
                        <input type={"text"} placeholder={"Имя"} className={st.nameField} value={name} onChange={(e) => {setName(e.target.value)
                            console.log(name)}} required/>
                        <input type="email" placeholder={"Почта"} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className={st.nameField} value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                    </div>
                    <div className={st.buttonContainer}>
                        <button className={st.startButton} type="submit">Начать</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Home;