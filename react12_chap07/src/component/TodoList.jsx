import './TodoList.css'
import TodoItem from "./TodoItem.jsx";
export default function TodoList({todo, onUpdate, onDelete, onChangeContent}) {
    return(
        <div className={"TodoList"}>
            <h4> TodoList </h4>
            <div className={'list_wrapper'}>
                {
                    todo.map((item) => (
                        <TodoItem key={item.id}
                                  {...item}
                                  onUpdate={onUpdate}
                                  onDelete={onDelete} onChangeContent={onChangeContent}/>
                        // <div className={'list_item'} key={item.id}>
                        //     {item.content}
                        // </div>
                    ))
                }
            </div>
        </div>
    )
}