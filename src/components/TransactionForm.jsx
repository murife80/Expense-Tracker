import React, { useState } from 'react';

const TransactionForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
      date: new Date().toLocaleDateString()
    };

    onAdd(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <div className="form">
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input 
            type="text" 
            id="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter description"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <small>(negative - expense, positive - income)</small>
          </label>
          <input 
            type="number" 
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <button className="btn" type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
