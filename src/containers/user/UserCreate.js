import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import UserCreateView from '../../presentations/user/UserCreateView';
import CreateUserMutation from '../../graphql/mutations/createUserMutation';
import UserShowView from '../../presentations/user/UserShowView';

const required = value => (value ? undefined : 'Required')

const minLength = min => value =>
  value.length >= min ? undefined : `Should be greater than ${min}`
 
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

const UserCreate = () => {
  const [userState, setUser] = useState();
  const [createUserMutation] = useMutation(CreateUserMutation);

  const onSubmit = (values) => {    
    createUserMutation({ 
      variables: { ...values } 
    }).then(
      response => {
        const { data: { createUserMutation: { user }}} = response;
        setUser(user);
      }) 
  }

  return userState ? 
    <UserShowView user={userState} /> : 
    <UserCreateView onSubmit={onSubmit} validate={composeValidators(required, minLength(2))}/>
}

export default UserCreate;