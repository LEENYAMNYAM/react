
import './App.css'
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Edit from "./pages/Edit.jsx";
import Home from "./pages/Home.jsx";
import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import useDiaryStore from "./store/useDiaryStore.jsx";

function App() {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const DiaryList = useDiaryStore((state)=> state.DiaryList);

    useEffect(() => {
        if(DiaryList){
            setIsDataLoaded(true);
        }
    }, [DiaryList]);

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
