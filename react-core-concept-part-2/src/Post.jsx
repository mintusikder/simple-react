import React from 'react';

const Post = ({post}) => {
    const {title,id} = post
    return (
        <div className='box'>
            <p>ID: {id}</p>
            <h5>Title: {title}</h5>
        </div>
    );
};

export default Post;