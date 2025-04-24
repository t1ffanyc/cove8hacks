import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="app">
      <header className="header">
      </header>
      <div className="login-page">
        <div className="form">
          <form className="login-form" >
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
            <p className="message">Not registered? <span className="toggle-form" style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}> Make an account! </span></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
