import Button from "./Button";

import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [Val,setVal] = useState("");
  const onSelect = (event) => {
    setVal(event.target.value);
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json)
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <h1>{Val}</h1>
      <select onChange={onSelect}>
        {coins.map((coin) => 
        <option>
          {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
        </option>)}
      </select>
    </div>
  );
}

export default App;
