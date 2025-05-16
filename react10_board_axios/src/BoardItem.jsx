export default function BoardItem({board, deleteBoard}) {
    const {num, title, content} = board;
    return(
        <div>
            <p> num : {num} </p>
            <p> title : {title} </p>
            <p> content : {content}
            <button onClick={()=> deleteBoard(num)}>삭제</button>
            </p>
            <hr/>
        </div>
    )
}
