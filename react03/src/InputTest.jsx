import {useState} from "react";


const InputTest = () => {
    let [text, setText] = useState('')
    const onChangeText = (e) => {
        setText(e.target.value)
    }


    const onReset =() =>{
        setText('')
    }

    return(
        <div>
            <input name="text" placeholder="텍스트입력"
            onChange={onChangeText} />
            <button onClick={onReset}>Reset</button>
            <div>
                <b>입력내용 : </b> {text}
            </div>
        </div>
    )
}
export default InputTest;