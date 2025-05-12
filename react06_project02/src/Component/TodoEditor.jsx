import './TodoEditor.css'
import {useRef, useState} from "react";

function TodoEditor({onCreate}){
    const [content, setContent] = useState('')
    const inputRef = useRef()
    //input에 value가 잆력될 때 부를 함수
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    //추가버튼 클릭
    const onSubmit = () => {
        if(!content){
            inputRef.current.focus();
            return
        }
        onCreate(content);
        // 입력후엔 Content값은 다시 비워주기
        setContent('')
    }

    //내용입력후 엔터키를 누르면 추가 되도록 설정
    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    }

    return(
        <div className="TodoEditor">
            <h2> 새로운 TODO 작성하기 </h2>
            <div className="editor_wrapper">
                <input placeholder="새로운 TODO..."
                       ref={inputRef}
                       onChange={onChangeContent}
                       onKeyDown={onKeyDown}
                       value={content}/>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}
export default TodoEditor