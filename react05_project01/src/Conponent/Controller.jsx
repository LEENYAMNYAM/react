function Controller({handleSetCount, randomCount}){
    return(
        <div>
            <button onClick={()=>handleSetCount(-1)}>-1</button>
            <button onClick={()=>handleSetCount(-10)}>-10</button>
            <button onClick={()=>handleSetCount(-100)}>-100</button>
            <button onClick={()=>handleSetCount(100)}>+100</button>
            <button onClick={()=>handleSetCount(10)}>+10</button>
            <button onClick={()=>handleSetCount(1)}>+1</button>
            <button onClick={()=>randomCount()}>랜덤수</button>
        </div>
    )
}
export default Controller