import React from 'react';

const UserShowView = ({user}) => {
    return(
        <div>
            <p>{user.id}</p>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.handler}</p>
        </div>
    )
}


export default UserShowView;