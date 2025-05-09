import './App.css'
import Header from "./Component/Header.jsx";
import TodoEditor from "./Component/TodoEditor.jsx";
import TodoList from "./Component/TodoList.jsx";
import {useState} from "react";

const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        createdDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
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
    console.log('app : ', todos);
    return (
      <div className="App">
          <Header />
          <hr/>
          <TodoEditor />
          <hr/>
          <TodoList todos={todos} />
      </div>
    )
}

export default App
