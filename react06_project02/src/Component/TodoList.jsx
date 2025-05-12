import './TodoList.css'
import TodoItem from "./TodoItem.jsx";
import {useEffect, useState} from "react";

function TodoList({todos, onDelete, onUpdate}) {
    console.log('todos : ', todos);
    const[search, setSearch] = useState('')
    const[searchTodos, setSearchTodos] = useState(todos);
    useEffect(() => {
        setSearchTodos(search === "" ? todos
        : todos.filter((todo)=>
            todo.content.toLowerCase().includes(search.toLowerCase())
            )
        )
        console.log('todos : ', todos);
    }, [search]);




    const onChangeSearch = (e) => {
        console.log('e.target.value : ', e.target.value);
        setSearch(e.target.value)
    }

    // const getSearchResult = () => {
    //     console.log('search : ', search);
    //     return search ===""? todos
    //         /* 내용을 모두 소문자로 바꾼값과 검색어를 모두 소문자로 바꾼값을 비교하여 포함된 애들만 받음. */
    //         : todos.filter((todo)=> todo.content.toLowerCase().includes(search.toLowerCase()))
    // }

    return (
        <div className="TodoList">
            <h2> TODO List </h2>
            <input className="searchbar"
                   placeholder="검색어를 입력하세요" value={search} onChange={onChangeSearch}/>
            <div className="list_wrapper">
                <div>TODOList</div>

                {/* 검색X */}
                {/*{todos.map((todo) => {*/}
                {/*    return (*/}
                {/*        <div>*/}
                {/*            /!*<div> {todo.id}</div>*!/*/}
                {/*            /!*<div> {todo.content}</div>*!/*/}
                {/*            /!*<div> {todo.isDone}</div>*!/*/}
                {/*            /!*<div> {new Date(todo.createdDate).toLocaleDateString()}</div>*!/*/}
                {/*            /!*<hr/>*!/*/}
                {/*            <TodoItem key={todo.id}*/}
                {/*                      // todo={todo}*/}
                {/*                       {...todo} onDelete={onDelete} onUpdate={onUpdate}/>*/}
                {/*        </div>*/}

                {/*    )})}*/}

                {/* 검색추가 */}

                {/*{*/}
                {/*    getSearchResult().map((todo)=>{*/}
                {/*        return(*/}
                {/*            <TodoItem key={todo.id}*/}
                {/*                      {...todo}*/}
                {/*                      onDelete={onDelete}*/}
                {/*                      onUpdate={onUpdate} />*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}

                {
                    searchTodos.map((todo) => {
                        return (
                            <div>
                                <TodoItem key={todo.id}
                                          {...todo}
                                          onDelete={onDelete}
                                          onUpdate={onUpdate}/>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )

}
export default TodoList