import React, { useRef, useState } from 'react'

const Todo = () => {

    //Todo
    //- 사용자가 등록한 업무를 보관할 배열 생성(state)
    const [todos, setTodos]=useState([]);
    const inputRef = useRef("");
    const addTodo =(event) =>{
        event.preventDefault();
        let todo = inputRef.current.value;
        // todos.push(todo);
        // setTodos(todos);
        setTodos(todos.concat(todo))
        console.log(todos);
        
    }

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <form action="">
                    <input type="text" name="" id="" ref={inputRef}/>
                    <input type="submit" name="" id="" value="등록" onClick={addTodo}/>
                </form>
            </div>
            <div>
                {todos.map((item,index)=>(
                    <p key={index}>{index+1}.{item}</p>
                ))}
            </div>
        </div>
    )
}

export default Todo