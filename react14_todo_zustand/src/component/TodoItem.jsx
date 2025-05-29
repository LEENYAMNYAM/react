import './TodoItem.css'
import useTodoStore from "../store/store.jsx";
const TodoItem = ({todo}) => {
    const removeTodo = useTodoStore((state)=>state.removeTodo)
    const changeTodo = useTodoStore((state)=>state.changeTodo)
    return(
        <div className={'TodoItem'}>
            <div>
                <input type={'checkbox'} checked={todo.isDone}
                       onChange={()=>changeTodo(todo)}/>
            </div>
            <div>
                {todo.id + 1}
            </div>
            <div className={'title_col'}>
                {todo.content}
            </div>
            <div className={'date_col'}>
                {new Date(todo.createdDate).toLocaleDateString()}
            </div>
            <div className={'btn_col'}>
                <button onClick={()=>removeTodo(todo)} > 삭제</button>
            </div>

        </div>
    )
}
export default TodoItem