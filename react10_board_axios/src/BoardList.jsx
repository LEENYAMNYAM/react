import BoardItem from "./BoardItem.jsx";

export default function BoardList({boards, deleteBoard}) {
    return(
        <div>
            <h3>BoardList</h3>
            {
                boards && boards.map(board => (
                    <div key={board.num}>
                        <BoardItem board={board} deleteBoard={deleteBoard}/>
                        {/*{board.num} // {board.title} // {board.content}*/}
                        {/*<button onClick={()=> deleteBoard(board.num)}>삭제</button>*/}
                    </div>
                ))
            }
        </div>
    )
}