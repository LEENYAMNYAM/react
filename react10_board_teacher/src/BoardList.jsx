import BoardItem from "./BoardItem.jsx";

function BoardList({boards}){

    return(
        <div>
            <h3>BoardList</h3>
            <div>
                {
                    boards.map((board) => {
                        return (
                            <BoardItem board={board}/>
                        )
                    })
                }
            </div>

        </div>
    )
}
export default BoardList
