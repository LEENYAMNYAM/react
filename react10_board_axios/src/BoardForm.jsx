import {useRef, useState} from "react";

export default function BoardForm({insertBoard}) {
    const inputRef = useRef();
    const[ formData, setFormData ] = useState({
        title: '',
        content: ''
    })

    // 값 변경
    const formChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name] : e.target.value
      })
    }

    // 추가하기
    const submitBoard = (e) => {
        e.preventDefault();
        insertBoard(formData)
        inputRef.current.value = ''
        inputRef.current.focus()
    }

    return(
        <div>
            <h3>BoardForm</h3>
            <input type="text" placeholder={'제목'}
                   name='title' onChange={formChange}
                   value={formData.title} ref={inputRef}/>
            <br/><br/>
            <textarea name='content'
                      cols={60} rows={5}
                      onChange={formChange}
                      value={formData.content}
                      ref={inputRef} />
            <br/>
            <button onClick={submitBoard}> 입력 </button>
        </div>
    )
}