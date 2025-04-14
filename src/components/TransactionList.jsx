import React from 'react';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="history">
      <h3>Transaction History</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="list">
          {transactions.map(txn => (
            <tr key={txn.id}>
              <td>{txn.date}</td>
              <td>{txn.text}</td>
              <td>${txn.amount.toFixed(2)}</td>
              <td>
                <button onClick={() => onDelete(txn.id)} className="btn delete-btn">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
