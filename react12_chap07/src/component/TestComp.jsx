import {useState} from "react";

export default function TestComp() {

    const [count, setCount] = useState(0)

    const onIncrease = () => {
        setCount(count + 1)
    }

    const onDecrease = () => {
        setCount(count - 1)
    }

    return(
        <div>
            <h4> TestComp </h4>
            <div>
                count : {count}
            </div>
            <div>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}