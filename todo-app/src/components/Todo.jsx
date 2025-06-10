<<<<<<< HEAD
import React, { useRef, useState } from 'react';
import Delete from './Delete'; 
=======
import React, { useRef, useState } from 'react'
import BottomMove from './BottomMove';
import TopMove from './TopMove';
>>>>>>> 285c868a7bd4ebc864991acc89891cc5f9bf40bf

const Todo = () => {
    
  //Todo
  //- 사용자가 등록한 업무를 보관할 배열 생성(state)
  const [todos, setTodos] = useState([]);
  const inputRef = useRef("");

<<<<<<< HEAD
  const addTodo = (event) => {
    event.preventDefault(); 
    let todo = inputRef.current.value.trim(); 

    if (todo) { 
      setTodos(todos.concat(todo));
      inputRef.current.value = ""; 
=======
    //Todo
    //- 사용자가 등록한 업무를 보관할 배열 생성(state)
    const [todos, setTodos] = useState([]);
    const inputRef = useRef("");
    const addTodo = (event) => {
        event.preventDefault();
        let todo = inputRef.current.value;
        // todos.push(todo);
        // setTodos(todos);
        setTodos(todos.concat(todo))
        console.log(todos);

>>>>>>> 285c868a7bd4ebc864991acc89891cc5f9bf40bf
    }
    console.log(todos);
  };

<<<<<<< HEAD
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <form onSubmit={addTodo}> 
          <input type="text" ref={inputRef} placeholder="새로운 할 일을 입력하세요"/>
          <input type="submit" value="등록"/> 
        </form>
      </div>
      <div>
        {todos.map((item, index) => (
          <p key={index}>
            {index + 1}. <input type='checkbox'/> {item}
            <Delete todos={todos} setTodos={setTodos} index={index} />
            <button>내용 수정하기</button>
            <button>맨 밑으로</button>
            <button>맨 위로</button>
          </p>
        ))}
      </div>
    </div>
  );
};
=======
    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <form action="">
                    <input type="text" name="" id="" ref={inputRef} />
                    <input type="submit" name="" id="" value="등록" onClick={addTodo} />
                </form>
            </div>
            {todos.map((item, index) => (
                <div>
                    <p key={index}>  {index + 1}. <input type='checkbox' />{item}</p>
                    <button>삭제</button>
                    <button>내용 수정하기</button>
                    <BottomMove index={index} todos={todos} setTodos={setTodos} />
                    <TopMove index={index} todos={todos} setTodos={setTodos} />
                </div>
            ))}
        </div>
    )
}
>>>>>>> 285c868a7bd4ebc864991acc89891cc5f9bf40bf

export default Todo;