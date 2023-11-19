import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../Pictures/login_background.png';
import { userCredentials } from './userCredentials';

interface UserCredential {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate(); // Hook for navigation

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [wrongDomain, setDomainError] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allowedDomain = 'seeu.edu.mk';

    if (email.endsWith(`@${allowedDomain}`)) {
      const foundUser = userCredentials.find(
        (user: UserCredential) => user.email === email && user.password === password
      );

      if (foundUser) {
        console.log('Authentication successful');
        setLoginError(false);

        // Use navigate to navigate to the "/study" path
        navigate('/study');
      } else {
        console.log('Authentication failed');
        setLoginError(true);
        setDomainError(true);
      }
    } else {
      console.log('Email domain is not allowed');
      setLoginError(true);
    }
  };

  const formStyle: React.CSSProperties = {
    backgroundImage: `url(${loginImage})`,
    padding: '20px',
    marginLeft: '168px',
    borderRadius: '30px',
    width: '750px',
    height: '700px',
    textAlign: 'center',
    marginRight: '100px',
  };

  const inputStyle: React.CSSProperties = {
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#1B282B',
    width: '534px',
    height: '40px',
    border: 'none',
    boxShadow: 'none',
    marginTop: '30px',
    color: 'white',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#4BCC4E',
    color: 'white',
    width: '300px',
    height: '60px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  const h1From: React.CSSProperties = {
    marginTop: '150px',
    color: 'white',
  };

  return (
    <div style={formStyle}>
      <h1 style={h1From}>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="test"
            placeholder="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            style={inputStyle}
          />
        </div>
        {loginError && <p style={{ color: 'red' }}>{wrongDomain ? 'Invalid email domain' : 'Invalid email or password'}</p>}
        <div>
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
