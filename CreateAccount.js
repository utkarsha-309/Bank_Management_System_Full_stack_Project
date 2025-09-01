import React, { useState } from 'react';
import axios from 'axios';

function CreateAccount() {
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [initialDeposite, setInitialDeposite] = useState('');

  const handleCreateAccount = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.post(
        'http://localhost:8080/bank/create-account',
        { accountNumber, accountHolder, initialDeposite },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      alert('Account created successfully!');
    } catch (error) {
      alert('Failed to create account');
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <input type="text" placeholder="Account Number" onChange={(e) => setAccountNumber(e.target.value)} />
      <input type="text" placeholder="Account Holder" onChange={(e) => setAccountHolder(e.target.value)} />
      <input type="text" placeholder="Initial Deposit" onChange={(e) => setInitialDeposite(e.target.value)} />
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
}

export default CreateAccount;
