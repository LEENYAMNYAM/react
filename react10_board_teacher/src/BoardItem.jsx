
function BoardItem({board, boardDelete}){
    const onDelete = () => {
        boardDelete(board.id)
    }
    return(
            <tr key={board.id}>
                <td>{board.title}</td>
                <td>{board.content}</td>
                <td>{new Date(board.createDate).toLocaleDateString()}</td>
                <td><button onClick={onDelete}>삭제</button></td>
            </tr>
    )
}
export default BoardItem