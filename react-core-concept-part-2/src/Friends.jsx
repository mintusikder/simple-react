import React, { use } from 'react';
import Friend from './Friend';

const Friends = ({friendsPromise}) => {
    const friend = use(friendsPromise)
    console.log(friend)
    return (
        <div className='box'>
            <p>friend: {friend.length}</p>
            {
                friend.map(frien => <Friend frien ={frien} key={frien.id}></Friend>)
            }
        </div>
    );
};

export default Friends;