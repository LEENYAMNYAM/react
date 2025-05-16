
import './App.css'
import BoardForm from "./BoardForm.jsx";
import BoardList from "./BoardList.jsx";
import {useRef, useState} from "react";

const WholeDatas = []

function App() {
    const [boards, setBoard] = useState(WholeDatas);
    let idRef = useRef(1);
    const insertBoard = (formData) => {
        console.log('app insertBoard formData : ', formData)
        let newBoard = {
            id: idRef.current++,
            ...formData,
            createDate: new Date().getTime()
        }
        setBoard([...boards, newBoard])
        console.log('app insertBoard board : ', boards)
    }

    const boardDelete = (boardId) => {
        console.log('app boardDelete boardId : ', boardId)
        setBoard(boards.filter((board) => board.id !== boardId))
    }

  return(
      <div>
          <h1>React10 Board</h1>
          <hr/>
          <BoardForm insertBoard={insertBoard}/>
          <BoardList boards={boards} boardDelete={boardDelete}/>
      </div>
  )
}

export default App
