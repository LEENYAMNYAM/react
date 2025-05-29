
import './App.css'
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Edit from "./pages/Edit.jsx";
import Home from "./pages/Home.jsx";
import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";

function App() {
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    //삭제
    const onDelete = (targetId) => {
        console.log("app onDelete targetId : ", targetId)

    }

    if(!isDataLoaded) {
        return <div>데이터를 불러오는 중입니다.</div>
    }else {

        return(
            <div className='App'>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/new'} element={<New />} />
                    <Route path={'/diary/:id'} element={<Diary />} />
                    <Route path={'/edit/:id'} element={<Edit />} />
                </Routes>
            </div>
        )
    }
}

export default App
