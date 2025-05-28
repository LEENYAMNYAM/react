
import './App.css'
import React, {useEffect, useReducer, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Edit from "./pages/Edit.jsx";
import axios from "axios";
export const DiaryStateContext =  React.createContext();
export const DiaryDispatchContext =  React.createContext();
function reducer(state, action) {
    switch (action.type) {
        case 'INIT' : {
            console.log('init ')
            return action.data
        }
        case 'CREATE':{
            return [action.data, ...state]
        }
    }  //switch

} //reducer
function App() {
    const [isDataLoaded, setIsDataLoaded]  = useState(false)
    const [data, dispatch] = useReducer(reducer, [])
    useEffect(()=>{  // 가장 먼저 서버에 접속하여 전체 데이터 가져오기
        axios.get('api/diary/list')
            .then((resp)=>{
                console.log('axios list : ', resp.data)
                dispatch({
                    type : 'INIT',
                    data : resp.data
                })
            })
        setIsDataLoaded(true)
    },[])
    //추가
    const onCreate = (date,content, emotionId) => {
        axios.post('api/diary/insert',{
            date : date,
            content:content,
            emotionId:emotionId
        }).then((resp)=>{
            console.log("resp insert :" , resp.data)
            dispatch({
                type:'CREATE',
                data : {
                    id : resp.data.id,
                    date : resp.data.date,
                    content :resp.data.content,
                    emotionId:resp.data.emotionId
                }
            })
        })
       
    }
    //삭제
    const onDelete = () => {

    }
    
    //수정
    const onUpdate = () => {

    }
  if(!isDataLoaded){
    return  <div>데이터를 불러오는 중입니다</div>
  } else{
      return (
        <div>
            <DiaryStateContext value={ data }>
                <DiaryDispatchContext
                    value={{onCreate, onUpdate, onDelete}}>
                    <BrowserRouter>
                        <div className="App">
                            <Routes>
                                <Route  path={'/'} element={<Home />} />
                                <Route path={'/new'} element={<New />} />
                                <Route path={'/diary/:id'} element={<Diary />} />
                                <Route path={'/edit/:id'} element={<Edit />} />
                            </Routes>
                        </div>
                    </BrowserRouter>
                </DiaryDispatchContext>
            </DiaryStateContext>

        </div>
      )
  }
}

export default App
