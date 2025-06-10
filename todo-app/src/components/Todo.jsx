import React, { useRef, useState } from 'react';
import Delete from './Delete';
import BottomMove from './BottomMove';
import TopMove from './TopMove';
import Update from './Update';
import CheckBox from './CheckBox'

const Todo = () => {

    //Todo
    //- 사용자가 등록한 업무를 보관할 배열 생성(state)
    const [todos, setTodos] = useState([]);
    const inputRef = useRef("");

    const addTodo = (event) => {
        event.preventDefault();
        let todo = inputRef.current.value.trim();

        if (todo) {
            setTodos(todos.concat(todo));
            inputRef.current.value = "";
        }
        console.log(todos);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <form onSubmit={addTodo}>
                    <input type="text" ref={inputRef} placeholder="새로운 할 일을 입력하세요" />
                    <input type="submit" value="등록" />
                </form>
            </div>
            {todos.map((item, index) => (
                <div className='todo '>
                    <p key={index}>
                        {index + 1}. <CheckBox todos={todos} index={index} setTodos={setTodos}/> {item}</p>
                    <Delete index={index} todos={todos} setTodos={setTodos} />
                    <Update index={index} todos={todos} setTodos={setTodos}  />
                    <BottomMove index={index} todos={todos} setTodos={setTodos} />
                    <TopMove index={index} todos={todos} setTodos={setTodos} />
                </div>
            ))}
        </div>
    );
};

export default Todo;