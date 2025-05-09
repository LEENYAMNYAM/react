import {useRef, useState} from "react";

function Body({children}){
    const [state, setState] = useState({
        name : "",
        gender : "",
        birth : "",
        bio : ""
    });
    const [text, setText] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleOnChange2 = (e) => {
        console.log("현재 수정 대상 : " + e.target.name);
        console.log("현재 수정 값 : " + e.target.value);
        e.preventDefault();
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const {name, gender, birth, bio} = state;

    const handleOnClick = () => {
        if(text.length < 5){
            alert('5글자보다 길게 입력하세요')
            textRef.current.focus();
        }else{
            alert('입력하신 값이 ' + text + " 이 맞습니까?")
            setText('')
        }
    }
    const textRef = useRef()


    return(
        <div>
            <div>
                <input name="name" placeholder="이름" onChange={handleOnChange2} />
            </div>
            <div>
                <select name="gender" onChange={handleOnChange2}>
                    <option></option>
                    <option>남성</option>
                    <option>여성</option>
                </select>
            </div>
            <div>
                <input name="birth" type='date' onChange={handleOnChange2} />
            </div>
            <div>
                <textarea name='bio' onChange={handleOnChange2}></textarea>
            </div>
            <h4> {name} // {gender} // {birth} // {bio}</h4>
            <button onClick={handleOnClick}>작성완료</button><p/>
            <input onChange={handleOnChange} ref={textRef} />

            <div> {text} </div>
            <hr/>
            <div> {children}</div>
        </div>
    )
}
export default Body;