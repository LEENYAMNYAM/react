import {useState} from "react"; //p239

function Viewer({number}){
    return <div> {number%2 ===0 ? <h3> 짝수 </h3> : <h3> 홀수 </h3>}</div>
}

function Body1(){

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number + 1);
    }
    const onDecrease = () => {
        setNumber(number - 1);
    }
    const onRandom = () => {
        setNumber(Math.floor(Math.random()*2000)-1000);
    }



    return(
        <div>
            <h2>{number}</h2>
            <Viewer number={number} />
            <div>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
                <button onClick={onRandom}>랜덤수</button>
            </div>
        </div>
    )
}
export default Body1;