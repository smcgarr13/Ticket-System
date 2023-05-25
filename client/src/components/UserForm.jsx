// Import necessary packages and components
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { CREATE_USER } from '../utils/mutations/userMutations';

import './../index.css';



// Defining the UserForm component
const UserForm = () => {
  // console.log('Rendering UserForm')
  // Using React useState hook for form state management
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Using Apollo useMutation hook to execute the CREATE_USER mutation
  const [createUser,{error,data}] = useMutation(CREATE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const mutationResponse = await createUser({
        variables: {
          email: formState.email,
          password: formState.password,
          username: formState.username,
        },
      });
      setFormState({
        email: "",
        password: "",
        userName: "",
      })
      const userToken = mutationResponse.data.createUser.token;
      console.log(mutationResponse);
      Auth.login(userToken);
    } catch (e) {
      console.error(e);
    }
  };
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };


  // Return statement to render the form to the screen
  return (
    <div className="container-login">
      <h2>Create an Account</h2>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <div className="input-container">
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Username"
            value={formState.username}
            onChange={handleChange}
            required
          />
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
            required
          />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={formState.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit" type="submit" disabled={!formState.username || !formState.email || !formState.password}>
          Submit
        </button>
      </form>
    </div>
  );
};

// Export UserForm component for use in other parts of the application
export default UserForm;