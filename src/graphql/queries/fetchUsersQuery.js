import { gql } from '@apollo/client';

const fetchUserQuery = gql `
    query {
        users {
            id
            firstName
            lastName
            handler
        }
    }
`;

export default fetchUserQuery;