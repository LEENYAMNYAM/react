import BoardItem from "./BoardItem.jsx";

function BoardList({boards, boardDelete}){

    return(
        <div>
            <div>
            <h3>BoardList</h3>

            <table border="1" width="100%" cellPadding="5" cellSpacing="0">
                <thead>
                <tr>
                    <th width="50px">제목</th>
                    <th>내용</th>
                    <th width="100px">작성일</th>
                    <th width="80px"></th>
                </tr>
                </thead>
                <tbody>

                {
                    boards.map((board) => {
                        return (
                            <BoardItem board={board} boardDelete={boardDelete}/>
                        )
                    })
                }


                </tbody>
            </table>

            </div>

        </div>
    )
}
export default BoardList
