import useCountStore from "./store/useCountStore.jsx";
import CountPage from "./CountPage.jsx";
import {useState} from "react";

const Counter = () => {

    const [count, setCount] = useState(0)
    const countChange = (e)=>{
        setCount(Number(e.target.value));
    }

    /*
    const initCount = useCountStore(state => state.initCount)
    const count = useCountStore((state)=> state.count)
    */
    const {upCount, downCount, resetCount, changeCount, addCount} = useCountStore();
    /*const upCount = useCountStore((state)=>state.upCount);
    const downCount = useCountStore((state)=>state.downCount);
    const resetCount = useCountStore((state)=>state.resetCount);
    const changeCount = useCountStore(state => state.changeCount);
    const addCount = useCountStore(state => state.addCount);*/

    return (
        <div className={'border border-2 border-primary-subtle rounded m-5 p-3'}>
            <button type={'button'} className={'btn btn-success'} onClick={upCount}> + </button>
            <button type={'button'} className={'btn btn-outline-primary ms-2'} onClick={downCount}> - </button>
            <button type={'button'} className={'btn btn-danger ms-2'} onClick={resetCount}> RESET </button>
            <button type={'button'} className={'btn btn-info ms-2'} onClick={()=>changeCount(count)}> Num_Count </button>
            <button type={'button'} className={'btn btn-info ms-2'} onClick={()=>addCount(count)}> ADD_Count </button>
            <div className={'my-3'}>
                <label className={'form-label'} htmlFor={'numid'}>숫자 입력</label>
                <input type={'number'} className={'form-control'} min={0}
                       id={'numid'} value={count}
                       onChange={countChange}
                       /*onChange={(e)=>initCount(Number(e.target.value))}*/
                       />
            </div>
            <CountPage />
        </div>
    )
}
export default Counter;