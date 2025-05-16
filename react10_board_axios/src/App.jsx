import './App.css'
import BoardForm from "./BoardForm.jsx";
import BoardList from "./BoardList.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [boards, setBoards] = useState([]);
    // 전체보기
    const listBoard = () => {
        //DB로 부터 데이터를 가지고 와서 boards에 넣기
        axios.get('/api/list', )
            .then((res) => {
                console.log('전체보기 : ', res);
                setBoards(res.data);
            })
    }

    useEffect(() => {
        listBoard()
    }, [])

    //추가하기
    const insertBoard = (formData) => {
        console.log("추가할 내용 : ", formData)
        axios.post('/api/insert', {
            title : formData.title,
            content : formData.content
        }).then((res) => {
                console.log('등록완료 : ', res);
                setBoards([...boards, res.data]);
        })
    }

    //삭제하기
    const deleteBoard = (targetId) => {
        console.log("삭제할 Board num : ", targetId)
        axios.delete(`/api/delete/${targetId}`)
            .then(() => {
                alert('삭제완료');
                setBoards(boards.filter(board => board.num !== targetId))
            })
    }
    return (
        <div className="App">
          <h2> React10 Board Axios</h2>
          <hr/>
          <BoardForm insertBoard={insertBoard}/>
          <BoardList boards={boards} deleteBoard={deleteBoard}/>
        </div>
)
}

export default App
