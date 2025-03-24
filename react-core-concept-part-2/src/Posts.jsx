import React, { use } from 'react';
import Post from './Post';

const Posts = ({postPromise}) => {
    const posts  = use(postPromise)
    console.log(posts)
    return (
        <div className='box'>
            <h2>All Post Here</h2>
            <p>posts : {posts.length}</p>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;