import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/admin/login', {
        username,
        password,
      });

      const token = response.data.token;

      // ✅ Store token in browser
      localStorage.setItem('token', token);

      // ✅ Pass token to App.js (to render Dashboard)
      onLogin(token);
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Check credentials.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="form-control mb-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="form-control mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
