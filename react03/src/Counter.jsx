import {useState} from "react";

const Counter = () => {

    let [number, setNumber] = useState(0)

    let onIncrease = () => {
        setNumber(number + 1)
    }

    let onDecrease = () => {
        setNumber(number - 1)
    }

    let onChange = (num) => {
        setNumber(number + num)
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={() => onChange(2)}> 2증가 </button>
            <button onClick={() => onChange(-2)}> 2감소 </button>
        </div>
    )
}
export default Counter;