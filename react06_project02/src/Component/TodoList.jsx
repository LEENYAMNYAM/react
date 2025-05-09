import './TodoList.css'

function TodoList({todos}) {
    console.log('todos : ', todos);

    return (
        <div className="TodoList">
            <h2> TODO List </h2>
            <input className="searchbar"
                   placeholder="검색어를 입력하세요 "/>
            <div className="list_wrapper">
                <div>TODOList</div>
                {todos.map((todo) => {
                    return (
                        <div>
                            <div> {todo.id}</div>
                            <div> {todo.content}</div>
                            <div> {todo.isDone}</div>
                            <div> {new Date(todo.createdDate).toLocaleDateString()}</div>
                        </div>
                    )})}
            </div>
        </div>
    )

}
export default TodoList