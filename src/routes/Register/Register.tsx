import React, { useState } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { Input, Required } from '../../components/Form/Form';

const handleSubmit = (ev: React.FormEvent) => {};

const onRegisterSuccess = () => {
  //history.push('/login');
};

const Register: React.FC = props => {
  Register.defaultProps = {
    onRegisterSuccess: () => {}
  };

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = ev => {
    ev.preventDefault();
    const { user_name, password } = ev.target;

    setError(null);
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value
    })
      .then(user => {
        user_name.value = '';
        password.value = '';
        onRegisterSuccess();
      })
      .catch(res => {
        setError(res.error);
      });
  };

  return (
    <form className="RegisterForm" onSubmit={handleSubmit}>
      <div role="alert">{error && <p className="red">{error}</p>}</div>
      <div className="user_name">
        <label htmlFor="RegisterForm__user_name">
          User name <Required />
        </label>
        <Input name="user_name" type="text" required id="RegisterForm__user_name"></Input>
      </div>
      <div className="password">
        <label htmlFor="RegisterForm__password">
          Password <Required />
        </label>
        <Input name="password" type="password" required id="RegisterForm__password"></Input>
      </div>
      <button className="yellow_bg" type="submit">
        REGISTER
      </button>
    </form>
  );
};

export default Register;
