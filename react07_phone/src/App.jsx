import './App.css'
import PhoneForm from "./component/PhoneForm.jsx";
import PhoneList from "./component/PhoneList.jsx";
import {useRef, useState} from "react";


const loaddatas =[
    {
        id : 0,
        name : '홍길동',
        phone : '010-1111-1111'
    },{
        id : 1,
        name : '이순신',
        phone : '010-2222-2222'
    }
]

function App() {
    const idRef = useRef(2);
    const [datas, setDatas] = useState(loaddatas);


    //추가
    const handleCreate = (data) => {
        data.id = idRef.current++;
        setDatas([...datas, data]);
    }
    //삭제
    const handleRemove = (id) => {
        setDatas(datas.filter(item => item.id !== id));
    }


  return(
      <div>
          <PhoneForm onCreate={handleCreate}/>
          <PhoneList datas={datas} onRemove={handleRemove} />
      </div>
  )
}

export default App
