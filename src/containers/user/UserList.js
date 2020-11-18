import React from 'react';
import { useQuery } from '@apollo/client';
import fetchUserQuery from '../../graphql/queries/fetchUsersQuery';
import UserListView from '../../presentations/user/UserListView';

export const UserList = () => {
    console.log('In UserList');
    console.log('fetchUserQuery');
    console.log(fetchUserQuery)
    const { loading, error, data } = useQuery(fetchUserQuery);
    if (loading) return <p>Loading...</p>;
    else if (error) return <p>Error :(</p>;
    else return <UserListView users={data.users} />              
}

export default UserList;