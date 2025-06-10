import React, { useRef, useState } from 'react';
import Delete from './Delete'; 

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

export default Todo;