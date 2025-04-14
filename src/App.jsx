import React, { useState } from 'react';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
 import './App.css';
 import SearchBar from './components/SearchBar';


 
const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(txn => txn.id !== id));
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <Balance transactions={transactions} />
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
    </div>
  );
};

export default App;
