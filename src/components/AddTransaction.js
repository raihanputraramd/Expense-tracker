import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const {addTransaction} = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction ={
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
  return (
    <div>
      <h3>Tambah transaksi baru</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Pengeluaran/Pemasukan</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Nominal
            <br />
            (Negative - pengeluaran, positive + pemasukan)
          </label>
          <input
            type="text"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Tambah Transaksi</button>
      </form>
    </div>
  );
};
