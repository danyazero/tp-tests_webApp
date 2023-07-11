import {lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {StartContainer} from "./Pages/Start";
import {HomeContainer} from "./Pages/Home";
import {TestContainer} from "./Pages/Test";
import Loading from "./shared/Loading/Loading";
import {ResultContainer} from "./Pages/Result";

const ErrorContainer = lazy(() => import("./Pages/Error/ErrorContainer"))
function App(): JSX.Element {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/error" element={<Suspense fallback={<Loading/>}><ErrorContainer/></Suspense>}/>
                    <Route path="/" element={<Navigate to="/start"/>}/>
                    <Route path="/start" element={<StartContainer/>}/>
                    <Route path = "/test" element={<TestContainer/>}/>
                    <Route path = "/result" element={<ResultContainer/>}/>
                    <Route path="/auth" element={<HomeContainer/>}/>
                </Routes>
            </BrowserRouter>

            <div className={"ftApPE"}></div>
            <div className={"kXrIic"}></div>
        </>
    );
}

export default App;
