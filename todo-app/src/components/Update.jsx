import React, { useRef, useState } from 'react'

const Update = ({todos, setTodos, index}) => {

  const [offcheck, oncheck] = useState(false);

      const inputRef = useRef("");
      const addTodo = (event) => {
          event.preventDefault();
          let todo = inputRef.current.value;
          // todos.push(todo);
          // setTodos(todos);
          const array = [...todos]
          array[index] = todo
          setTodos(array)
          oncheck(false)
      }

  if(offcheck){
    return(
        <div>
            <input type="text" name="" id="" ref={inputRef} />
            <button onClick={addTodo}>수정완료</button>
        </div>
    )
  }

  return (
    <div>
        <button onClick={ () => (oncheck(true)) }>내용 수정하기</button>
    </div>
  )
}

export default Update