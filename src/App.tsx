import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {StartContainer} from "./Components/Start/StartContainer";
import {HomeContainer} from "./Components/Home/HomeContainer";
import {TestContainer} from "./Components/Test/TestContainer";
import Loading from "./HelpComponents/Loading/Loading";

const ErrorContainer = React.lazy(() => import("./Components/Error/ErrorContainer"))
const ResultContainer = React.lazy(() => import("./Components/Result/ResultContainer"))
function App(): JSX.Element {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/error" element={<Suspense fallback={<Loading/>}><ErrorContainer/></Suspense>}/>
                    <Route path="/" element={<Navigate to="/start"/>}/>
                    <Route path="/start" element={<StartContainer/>}/>
                    < Route path = "/test" element={<TestContainer/>}/>
                    < Route path = "/result" element={<Suspense fallback={<Loading/>}><ResultContainer/></Suspense>}/>
                    < Route path="/auth" element={<HomeContainer/>}/>
                </Routes>
            </BrowserRouter>

            <div className={"ftApPE"}></div>
            <div className={"kXrIic"}></div>
        </>
    );
}

export default App;
