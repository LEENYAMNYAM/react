import {useState} from "react";


const Say = () => {

    let [message, setMessage] = useState('안녕')
    let [color, setColor] = useState('Yellow')

    const enterMessage = () => {
        setMessage('반갑습니다.')
        setColor('green')
    }
    const leaveMessage = () => {
        setMessage('안녕히 가세요.')
        setColor('skyblue')
    }
    // const changeColor = (e) => {
    //     console.log()
    //     setColor(e.target.value)
    // }

    const changeColor2 =(color) =>{
        setColor(color)
    }

    return(
        <div>
            {/*입장이면 message에 반갑습니다. 출력*/}
            {/*퇴장이면 message에 안녕히 가세요. 출력*/}
            <h1 style={{color}}> {message}</h1>
            <button onClick={enterMessage}>입장</button>
            <button onClick={leaveMessage}>퇴장</button>

            <button onClick={()=>changeColor2('red')}>빨간색</button>
            <button onClick={()=>changeColor2('blue')}>파란색</button>
            <button onClick={()=>changeColor2('pink')}>핑크색</button>
            <button onClick={()=>changeColor2('yellow')}>노란색</button>
            <button onClick={()=>changeColor2('black')}>검은색</button>

            {/*<button onClick={changeColor} value="red">빨간색</button>*/}
            {/*<button onClick={changeColor} value="blue">파란색</button>*/}
            {/*<button onClick={changeColor} value="pink">핑크색</button>*/}
            {/*<button onClick={changeColor} value="yellow">노란색</button>*/}
            {/*<button onClick={changeColor} value="black">검은색</button>*/}
        </div>
    )

}
export  default Say;