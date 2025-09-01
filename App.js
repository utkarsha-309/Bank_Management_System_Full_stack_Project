import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CreateAccount from './components/CreateAccount';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // handle login from Login.js
  const handleLogin = (jwtToken) => {
    localStorage.setItem('token', jwtToken); // ✅ Store token
    setLoggedIn(true); // ✅ Trigger dashboard view
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-4">Bank Management System</h1>

      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Dashboard />
          <hr />
          <CreateAccount />
        </>
      )}
    </div>
  );
}

export default App;
