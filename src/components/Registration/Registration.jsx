import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

const Registration = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const username = evt.target.elements.username.value;
    const email = evt.target.elements.email.value;
    const password = evt.target.elements.password.value;
    dispatch(register({ username, email, password }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            username <input name="username" type="text"></input>
          </label>
        </div>
        <div>
          <label>
            {' '}
            email <input name="email" type="text"></input>
          </label>
        </div>
        <div>
          <label>
            password <input name="password" type="text"></input>
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
