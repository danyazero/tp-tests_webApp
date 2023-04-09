import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {StartContainer} from "./Components/Start/StartContainer";
import {HomeContainer} from "./Components/Home/HomeContainer";
import {TestContainer} from "./Components/Test/TestContainer";
import {ResultContainer} from "./Components/Result/ResultContainer";
import {ErrorContainer} from "./Components/Error/ErrorContainer";

function App(): JSX.Element {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/error" element={<ErrorContainer/>}/>
                    <Route path="/" element={<Navigate to="/start"/>}/>
                    <Route path="/start" element={<StartContainer/>}/>
                    < Route path = "/test" element={<TestContainer/>}/>
                    < Route path = "/result" element={<ResultContainer/>}/>
                    < Route path="/auth" element={<HomeContainer/>}/>
                </Routes>
            </BrowserRouter>

            <div className={"ftApPE"}></div>
            <div className={"kXrIic"}></div>
        </>
    );
}

export default App;
