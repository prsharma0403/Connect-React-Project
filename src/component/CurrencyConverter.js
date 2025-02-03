import React, { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromcurrency, setFromCurrency] = useState();
  const [tocurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();
  const [loader, setLoader] = useState(false);

  const getCurrencies = async () => {
   
    const res = await fetch("https://api.frankfurter.dev/v1/currencies");
    const data = await res.json();
    setCurrencies(Object.keys(data));

  };

  useEffect(() => {
    getCurrencies();
  }, []);

  const convertCurrency = async () => {
    if (!amount || !fromcurrency || !tocurrency) {
      setResult("Please fill out all fields.");
      return;
    }

    // Check if from and to currencies are the same
    if (fromcurrency === tocurrency) {
      setResult("Error: From and To currencies cannot be the same.");
      return;
    }

    setLoader(true);
    try {
      const res = await fetch(`https://api.frankfurter.dev/v1/latest?amount=${amount}&base=${fromcurrency}&symbols=${tocurrency}`);
      const data = await res.json();
      setResult(`Converted Amount: ${data.rates[tocurrency]}`);
    } catch (error) {
      setResult("Error fetching conversion data");
    }
    setLoader(false);
  };

  const handleToCurrency = (e) => {
    setToCurrency(e.target.value);
  };

  const handleFromCurrencies = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="select">
          <div>
            <p className="currency">From Currency</p>
            <select value={fromcurrency} onChange={handleFromCurrencies}>
              {currencies.map((curVal, index) => (
                <option key={index} value={curVal}>
                  {curVal}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="currency">To Currency</p>
            <select value={tocurrency} onChange={handleToCurrency}>
              {currencies.map((curVal, index) => (
                <option key={index} value={curVal}>
                  {curVal}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="amountContainer">
          <p className="currency">Amount</p>
        

<input onChange={handleAmount}type="number" placeholder="Enter Amount" />
        </div>

        <div className="convertbtn">
          <button onClick={convertCurrency}>Convert</button>
        </div>

        <div className="result">
          {loader ? (
            <ClockLoader loading={loader} color="orange" />
          ) : (
            <p>{result}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
