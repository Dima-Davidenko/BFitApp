import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const email = evt.target.elements.email.value;
    const password = evt.target.elements.password.value;
    dispatch(logIn({ email, password }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            email <input name="email" type="text"></input>
          </label>
        </div>
        <div>
          <label>
            password <input name="password" type="text"></input>
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
