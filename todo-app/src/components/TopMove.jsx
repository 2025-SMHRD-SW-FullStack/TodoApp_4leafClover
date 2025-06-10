import React from 'react';

const TopMove = ({ index, todos, setTodos }) => {
    const moveToTop = () => {
        if (index === 0) return;
        const item = todos[index];
        const newTodos = [item, ...todos.filter((_, i) => i !== index)];
        setTodos(newTodos);
    };

    return (
        <button onClick={moveToTop}>맨 위</button>
    );
};

export default TopMove;
