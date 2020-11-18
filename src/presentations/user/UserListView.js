import React from 'react';

export const UserListView = ({ users }) => {
    return (
            <div className="App">
                <p>List Users</p>
                { users.map((item) => (
                        <p key={item.id}>{item.firstName}</p>
                    ))
                }
            </div>
        );              
}

export default UserListView;