import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {StartContainer} from "./Components/Start/StartContainer";
import {HomeContainer} from "./Components/Home/HomeContainer";
import {TestContainer} from "./Components/Test/TestContainer";
import {ResultContainer} from "./Components/Result/ResultContainer";

function App(): JSX.Element {
    return (
        <div className={"App"}>
            {/*<HomeContainer/>*/}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/start"/>}/>
                    <Route path="/start" element={<StartContainer/>}/>
                    < Route path = "/test" element={<TestContainer/>}/>
                    < Route path = "/result" element={<ResultContainer/>}/>
                    < Route path="/auth" element={<HomeContainer/>}/>
                    {/*< Route path = "/admin/:userId?" element={<AdminContainer/>}/>*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
