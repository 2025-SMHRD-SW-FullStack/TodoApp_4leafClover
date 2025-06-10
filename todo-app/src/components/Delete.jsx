// Delete.jsx
import React from 'react';

const Delete = ({ todos, setTodos, index }) => {
  // 2. 삭제버튼이 클릭되었을 때 실행되는 함수 deleteContent 생성
  const deleteContent = () => {
    // 2-1. filter 함수를 통해 선택한 항목을 제외한 나머지 항목으로 배열 생성
    const updatedTodos = todos.filter((_, i) => i !== index);
    
    // 2-2. 새롭게 생성된 배열을 setTodos 를 통해 todos 에 반영
    setTodos(updatedTodos);
  };

  return (
    <button onClick={deleteContent}>삭제</button>
  );
};

export default Delete;