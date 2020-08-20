import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expenses =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -(1).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Pemasukan</h4>
        <p className="money plus">Rp.{numberWithCommas(income)}</p>
      </div>
      <div>
        <h4>Pengeluaran</h4>
        <p className="money minus">Rp.{numberWithCommas(expenses)}</p>
      </div>
    </div>
  );
};
