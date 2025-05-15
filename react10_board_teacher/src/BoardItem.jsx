
function BoardItem({board}){
    return(
        <table border="1" width="100%" cellPadding="3" cellSpacing="0">
            <thead>
            <tr>
                <th width="50px">번호</th>
                <th>제목</th>
                <th width="100px">작성일</th>
            </tr>
            </thead>
            <tbody>
            <tr key={board.id}>
                <td>{board.id}</td>
                <td>{board.title}</td>
                <td>{new Date(board.createDate).toLocaleDateString()}</td>
            </tr>
            <tr>
                <td colSpan={3}>{board.content}</td>
            </tr>
            </tbody>
        </table>
    )
}
export default BoardItem