import './TodoEditor.css'
import useTodoStore from "../store/store.jsx";
import {useRef, useState} from "react";
const TodoEditor = () =>{
    const addTodo = useTodoStore((state) => state.addTodo)
    const [content, setContent] = useState('')
    const idRef = useRef(3)
    const inputRef = useRef()
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    //추가버튼 클릭
    const onSubmit =() => {
        // 내용이 비어 있다면
        if(!content){
            inputRef.current.focus()
            return
        }
        const newItem = {
            id : idRef.current++,
            isDone : false,
            content : content,
            createdDate : new Date().getTime()
        }
        addTodo(newItem)
        setContent('')
    }

    // 내용을 입력하고 엔터키를 누르면 추가가 되도록
    const onkeydown = (e) => {
        if(e.key === 'Enter' ){
            onSubmit()
        }

    }
    return (
        <div>
            <div className={'TodoEditor'}>
                <h4> 새로운 Todo 작성하기 </h4>
                <div className={'editor_wrapper'}>
                    <input placeholder={'새로운 Todo....'}
                    ref={inputRef}
                    onChange={onChangeContent}
                    onKeyDown={onkeydown}
                    value={content}/>
                    <button onClick={onSubmit}>추가</button>


                </div>
            </div>
        </div>
    )
}
export default TodoEditor