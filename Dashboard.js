import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const token = localStorage.getItem('token'); // ✅ Read from localStorage
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/admin/accounts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setAccounts(res.data))
      .catch((err) => console.error('Failed to fetch accounts:', err));
  }, [token]);

  return (
    <div className="container mt-5">
      <h2>Bank Accounts</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Account Number</th>
            <th>Holder</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((acc) => (
            <tr key={acc.id}>
              <td>{acc.id}</td>
              <td>{acc.accountNumber}</td>
              <td>{acc.accountHolder}</td>
              <td>{acc.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
