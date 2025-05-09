import './TodoEditor.css'

function TodoEditor(){
    return(
        <div className="TodoEditor">
            <h2> 새로운 TODO 작성하기 </h2>
            <div className="editor_wrapper">
                <input placeholder="새로운 TODO..."/>
                <button>추가</button>
            </div>
        </div>
    )
}
export default TodoEditor