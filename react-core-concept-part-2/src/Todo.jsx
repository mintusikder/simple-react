import React from 'react';

const Todo = ({todo}) => {
    const {title} = todo
    return (
        <div className='box'>
            <p>Title: {title}</p>
        </div>
    );
};

export default Todo;