import React from 'react';

const Balance = ({ transactions }) => {
  const amounts = transactions.map(txn => txn.amount);
  const income = amounts.filter(a => a > 0).reduce((a, b) => a + b, 0);
  const expense = amounts.filter(a => a < 0).reduce((a, b) => a + b, 0);

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <p id="balance">Ksh{(income + expense).toFixed(2)}</p>
      <div className="income-expense">
        <div>
          <h3>Income</h3>
          <p id="income">Ksh{income.toFixed(2)}</p>
        </div>
        <div className="expense">
          <h3>Expenses</h3>
          <p id="expense">Ksh{Math.abs(expense).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
