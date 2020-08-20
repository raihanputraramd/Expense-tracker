import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h4>Total Uang mu</h4>
      <h1>Rp.{numberWithCommas(total)}</h1>
    </div>
  );
};
