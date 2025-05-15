import {useRef, useState} from "react";

export default function BoardForm({onCreate}) {
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    let [data, setData] = useState({
        title : '',
        content : ''
    })

    const handleData = (e) => {
        console.log('handleData : ' + data.title + data.content)
        e.preventDefault();
        onCreate(data);
        inputRef1.current.value = '';
        inputRef2.current.value = '';
        inputRef1.current.focus();
    }

    const changeData = (e) => {
        console.log('changeData input : ' + e.target.value)
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
        console.log('changeData output : ' + data.title + data.content)
    }

    return(
        <div>
            <h3>BoardForm</h3>
            <input type="text" placeholder={'제목'}
            name='title' onChange={changeData} ref={inputRef1}/>
            <br/><br/>
            <textarea name='content' cols={60} rows={5} onChange={changeData} ref={inputRef2}></textarea>
            <br/>
            <button onClick={handleData}> 입력 </button>
        </div>
    )
}