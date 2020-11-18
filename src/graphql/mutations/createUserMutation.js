import { gql } from '@apollo/client';
const CreateUserMutation = gql `
    mutation CreateUserMutation($firstName: String!, $lastName: String!, $handler: String!) {
        
        createUserMutation(input: { params: {
            firstName: $firstName, 
            lastName: $lastName, 
            handler: $handler 
        }}) {
            user {
                id
                firstName
                lastName
                handler
            }
        }
    }
`

export default CreateUserMutation;