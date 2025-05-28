
import './App.css'
import {Route, Routes} from "react-router-dom";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Edit from "./pages/Edit.jsx";
import Home from "./pages/Home.jsx";
import React, {useEffect, useReducer, useState} from "react";
import axios from "axios";

export const DiaryStateContext   = React.createContext();
export const DiaryDispatchContext = React.createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'INIT': {
            console.log("init ")
            return action.data;
        }
        case 'CREATE': {
            return [action.data, ...state];
        }
        case 'DELETE': {
            return state.filter((it)=> String(it.id) !==String(action.targetId));
        }
        case 'UPDATE' : {
            return state.map((it) => String(it.id)===String(action.data.id) ? {...action.data} : it)
        }
    }
}   //reducer

function App() {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [data, dispatch] = useReducer(reducer, [])

    useEffect(() => {
        axios.get('/api/diary/list')
            .then((resp) => {
                console.log("axios list : ", resp.data)
                dispatch({
                    type : 'INIT',
                    data : resp.data
                })
            })
        setIsDataLoaded(true)
    }, [])

    //추가
    const onCreate = (date, content, emotionId) => {
        axios.post('/api/diary/insert', {
            date : date,
            content : content,
            emotionId : emotionId
        }).then((resp) =>{
            console.log("resp insert : ", resp.data)
            dispatch({
                type : 'CREATE',
                data : {
                    id :resp.data.id,
                    date : resp.data.date,
                    content : resp.data.content,
                    emotionId : resp.data.emotionId
                }
            })
        })
    }
    //삭제
    const onDelete = (targetId) => {
        axios.delete(`/api/diary/delete/${targetId}`)
            .then(() => {
                dispatch({
                    type : 'DELETE',
                    targetId
                })
            })
    }
    //수정
    const onUpdate = (targetId, date, content, emotionId) => {
        axios.put(`/api/diary/update/${targetId}`, {
            id : targetId,
            date,
            content,
            emotionId
        }).then(resp =>{
            console.log('onUpdate resp : ', resp.data)
            dispatch({
                type: 'UPDATE',
                data : {
                    id:targetId,
                    date,
                    content,
                    emotionId
                }
            })
        })
    }
    if(!isDataLoaded) {
        return <div>데이터를 불러오는 중입니다.</div>
    }else {
        return(
            <DiaryStateContext.Provider value={ data }>
                <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
                    <div className='App'>
                        <Routes>
                            <Route path={'/'} element={<Home />} />
                            <Route path={'/new'} element={<New />} />
                            <Route path={'/diary/:id'} element={<Diary />} />
                            <Route path={'/edit/:id'} element={<Edit />} />
                        </Routes>
                    </div>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        )
    }
}

export default App
