import './App.css'
import TestComp from "./component/TestComp.jsx";
import TestComp1 from "./component/TestComp1.jsx";
import Header from "./component/Header.jsx";
import TodoEditor from "./component/TodoEditor.jsx";
import TodoList from "./component/TodoList.jsx";
import {useReducer, useRef} from "react";

const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        createdDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: true,
        content: "빨래 널기",
        createdDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        createdDate: new Date().getTime(),
    },
];

function reducer(state, action){
    switch (action.type){
        case "CREATE":
            return [action.newItem, ...state];
        case "DELETE":
            console.log("reducer delete action.items : ", action.items)
            return state.filter(item => item.id !== action.id);
        case "UPDATE":
            return state.map((item) => (item.id === action.id ? {...item, isDone: !item.isDone} : item))
        case "CHANGECONTENT":
            return state.map(item =>
                item.id === action.id ? { ...item, content: action.newContent } : item
            );
        default: {
            return state;
        }
    }

}


function App() {
    //     state변수 상태변화촉발함수       상태변화함수   초기값
    const [todo, dispatch] = useReducer(reducer, mockTodo);
    const idRef = useRef(3);

    //추가
    const onCreate = (content) => {
        console.log("app onCreate content : ", content)
        dispatch({
            type : "CREATE",
            newItem : {id : idRef.current++,
                       isDone : false,
                       content : content,
                       createdDate : new Date().getTime()
            }
        })
    }
    //삭제
    const onDelete = (targetId) => {
        console.log("app onDelete tartgetId : ", targetId)
        dispatch({
            type : "DELETE",
            id : targetId
        })
        console.log("app on Delete mockTodo : ", mockTodo)
    }
    //수정
    const onUpdate = (targetId) => {
        console.log("app onUpdate tartgetId : ", targetId)
        dispatch({
            type : "UPDATE",
            id : targetId
        })
    }

    //content수정
    const onChangeContent = (targetId, newContent) => {
        dispatch({
            type : "CHANGECONTENT",
            id : targetId,
            newContent: newContent
        });
    }

  return(
      <div className='App'>
          <h3> useReducer : 컴포넌트에서 상태변화 코드를 분리(외부에 넣겠다) </h3>
          {/*<TestComp />*/}
          {/*<TestComp1 />*/}
          <Header />
          <TodoEditor onCreate={onCreate}/>
          <TodoList todo={todo}
                    onUpdate={onUpdate}
                    onDelete={onDelete} onChangeContent={onChangeContent}/>
      </div>
  )
}

export default App
