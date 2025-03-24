import React, { use } from 'react';

const Friends = ({friendsPromise}) => {
    const friend = use(friendsPromise)
    console.log(friend)
    return (
        <div className='box'>
            <p>friend: {friend.length}</p>
        </div>
    );
};

export default Friends;