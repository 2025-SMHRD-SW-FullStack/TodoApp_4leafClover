import React from 'react';

const BottomMove = ({ index, todos, setTodos }) => {
    const moveToBottom = () => {
        if (index === todos.length - 1) return;
        const item = todos[index];
        const newTodos = [...todos.filter((_, i) => i !== index), item];
        setTodos(newTodos);
    };

    return (
        <button onClick={moveToBottom}>맨 아래</button>
    );
};

export default BottomMove;
