import React from 'react';

const Todo = props => {
    return (
        <div
        onClick={() props.toggleDone(props.todo.id)}
        className={`item${props.todo.done ?`done`: ''}`}>
            <p>{prop.todo.name}</p>
        </div>
    );
};

export default Todo; 