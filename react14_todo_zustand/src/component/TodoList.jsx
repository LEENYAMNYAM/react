import './TodoEditor.css'
import useTodoStore from "../store/store.jsx";
const TodoList = () => {
    const todos = useTodoStore((state)=>state.todos)
    console.log('TodoList todos : ', todos)
    return(
        <div>
            TodoList
        </div>
    )
}
export default TodoList;