import { useEffect, useState } from "react";

function FetchJsonTest() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The data! {loading ? "" : `(${data.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {data.map((item) => (
            <option>
              {item.name} ({item.symbol}): ${item.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default FetchJsonTest;