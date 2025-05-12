import './App.css'
import Header from "./Component/Header.jsx";
import TodoEditor from "./Component/TodoEditor.jsx";
import TodoList from "./Component/TodoList.jsx";
import {useRef, useState} from "react";

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

function App() {
    const [todos, setTodo] = useState(mockTodo);
    const idRef = useRef(3);
    console.log('app : ', todos);

    //추가 함수
    const onCreate = (content) => {
        console.log('context in app onCreate : ', content);
        const newItem ={
            id: idRef.current++,
            isDone: false,
            content: content,
            createdDate: new Date().getTime(),
        }
        console.log('newItem : ', newItem);
        setTodo([newItem, ...todos]);
    }

    //삭제 ==> 함수 삭제할 id(targetId)를 받아와서 그 id의 내용을 보여주지 않기
    const onDelete = (targetId) => {
        console.log('targetId in onDelete : ', targetId);
        setTodo(todos.filter((todo)=> todo.id !== targetId))
    }

    //수정 ==> 수정할 id(targetId)를 받아와서 그 체크 박스 체크여부를 변경
    const onUpdate = (targetId) => {
        console.log('targetId in onUpdate : ', targetId);
        setTodo(
            todos.map((it)=>(
                it.id === targetId ? {...it, isDone: !it.isDone} : it
            ))
        )
    }

    return (
      <div className="App">
          <Header />
          <hr/>
          <TodoEditor onCreate={onCreate} />
          <hr/>
          <TodoList todos={todos} onDelete={onDelete} onUpdate={onUpdate}/>
      </div>
    )
}

export default App
