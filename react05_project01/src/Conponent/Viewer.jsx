function Viewer({count}){
    return(
        <div>
            <div>현재 카운트 : {count%2 ===0 ? '짝수' : '홀수'}</div>
            <h1>{count}</h1>
        </div>

    )
}
export default Viewer