
import './App.css'
import {useReducer, useRef} from "react";
import PhoneForm from "./component/PhoneForm.jsx";
import PhoneList from "./component/PhoneList.jsx";

const mockDatas =[
    {
        id : 0,
        name : '홍길동',
        phone : '010-1111-1111',
        createDate : new Date().getTime()

    },{
        id : 1,
        name : '이순신',
        phone : '010-2222-2222',
        createDate : new Date().getTime()
    }
]

function reducer(state, action){
    switch (action.type) {
        case 'CREATE':
            return [...state, action.newdata];
        case 'REMOVE':
            return state.filter(data => data.id !== action.id);
        case 'UPDATE':
            return state.map(data => data.id === action.data.id ? action.data : data);
        default : {
            return state;
        }

    }
}

function App() {
    //      state변수                         상태변화촉발함수            상태변화함수   초기값
    const [phoneList, dispatch] = useReducer(reducer, mockDatas);
    const idRef = useRef(2);

    //추가
    const onCreate = (newdata) => {
        console.log("App onCreate newdata : ", newdata)
        dispatch({
            type : 'CREATE',
            newdata : {
                id : idRef.current++,
                name : newdata.name,
                phone : newdata.phone,
                createDate : new Date().getTime()
            }
        })
    }

    //삭제
    const onRemove = (id) => {
        console.log("App onRemove id : ", id)
        dispatch({
            type : 'REMOVE',
            id : id
        })
    }

    //
    const onUpdate = (targetPhone) => {
        dispatch({
            type : 'UPDATE',
            data : targetPhone
        })
    }
    return(
      <div>
          <PhoneForm onCreate={onCreate} />
          <PhoneList phoneList={phoneList} onRemove={onRemove} onUpdate={onUpdate}/>
      </div>

  )
}

export default App
