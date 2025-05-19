import {useReducer} from "react";

//         state : 현재 state값이 저장됨,
//         action : dispatch를 호출하면서 인수로 전달된 action 객체저장
function reducer(state, action){
    switch(action.type){
        case "INCREASE":
            return state + action.data
        case "DECREASE":
            return state - action.data
        case "RESET":
            return action.data
        default:
            return state
    }
}

export default function TestComp1() {
    // count : state 변수, dispatch : 상태변화촉발함수, useReducer의 reducer : 상태변화 함수, [] : 초기값
    //     state변수     상태변화촉발함수         상태변화함수       초기값
    const [count, dispatch] = useReducer(reducer, 0)
    return(
        <div>
            <h4> TestComp1 </h4>
            <div>
                count : {count}
            </div>
            <div>
                <button onClick={() => dispatch({type:"INCREASE", data:1})}>+</button>
                <button onClick={()=> dispatch({type:"DECREASE", data:1})}>-</button>
                <button onClick={() => dispatch({type:"RESET", data:0})}>초기화(0)</button>
            </div>
        </div>
    )
}