import './TodoEditor.css'
import {useState} from "react";
export default function TodoEditor({onCreate}) {
    const [content, setContent] = useState('')
    const onChangeContent = (e) => {
        console.log('onChangeContent tart' , e.target.value)
        setContent(e.target.value)
    }
    const onSubmit = () => {
        onCreate(content)
        setContent('')
    }

    return(
        <div className={"TodoEditor"}>
            <h4> 새로운 Todo 작성하기 </h4>
            <div className={"editor_wrapper"}>
                <input type={'text'}
                       value={content}
                       onChange={onChangeContent}
                       placeholder={'새로운 Todo...'}/>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}
