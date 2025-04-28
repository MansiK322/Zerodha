import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_FINNHUB_API_KEY;
  const stockSymbols = ["AAPL", "GOOGL", "AMZN", "TSLA"]; // Example symbols

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const fetchedPositions = await Promise.all(
          stockSymbols.map(async (symbol) => {
            const response = await axios.get(
              `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
            );

            return {
              product: "Equity",
              name: symbol,
              qty: Math.floor(Math.random() * 10) + 1,
              avg: response.data.pc || 0,
              price: response.data.c || 0,
              isLoss: response.data.d < 0,
              day: response.data.d?.toFixed(2) + " (" + (response.data.dp?.toFixed(2) || 0) + "%)",
            };
          })
        );

        setPositions(fetchedPositions);
      } catch (err) {
        setError("Failed to fetch positions data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, [apiKey]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
