
import './App.css'
import BoardForm from "./BoardForm.jsx";
import BoardList from "./BoardList.jsx";
import {useRef, useState} from "react";

const WholeDatas = []

function App() {
    const [datas, setDatas] = useState(WholeDatas);
    let idRef = useRef(1);
    const onCreate = (data) => {
        console.log('onCreate : ' + data.title + data.content)
        const newData = {
            id : idRef.current++,
            ...data,
            createDate : new Date().getTime()
        }
        setDatas([...datas, newData])
    }

  return(
      <div>
          <h1>React10 Board</h1>
          <hr/>
          <BoardForm onCreate={onCreate}/>
          <BoardList datas={datas}/>
      </div>
  )
}

export default App
