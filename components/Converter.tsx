'use client';
import { useState, useEffect } from 'react';
export default function Converter() {
  const [amount, setAmount] = useState<string>('1');
  const [fromCurrency, setFromCurrency] = useState<string>('INR');
  const [toCurrency, setToCurrency] = useState<string>('BTC');
  const [convertedAmount, setConvertedAmount] = useState<string>('0.00000008');
  const [exchangeRate, setExchangeRate] = useState<number>(8.851299583210005e-8);
  const exchangeRates = {
    INR_TO_BTC: 8.851299583210005e-8,
    BTC_TO_INR: 11297776.00
  };
  const convertCurrency = () => {
    const numericAmount = parseFloat(amount) || 0;
    if (fromCurrency === 'INR' && toCurrency === 'BTC') {
      const result = numericAmount * exchangeRates.INR_TO_BTC;
      setConvertedAmount(result.toFixed(8));
      setExchangeRate(exchangeRates.INR_TO_BTC);
    } else if (fromCurrency === 'BTC' && toCurrency === 'INR') {
      const result = numericAmount * exchangeRates.BTC_TO_INR;
      setConvertedAmount(result.toFixed(2));
      setExchangeRate(exchangeRates.BTC_TO_INR);
    }
  };
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  useEffect(() => {
    convertCurrency();
  }, [amount, fromCurrency, toCurrency]);
  return (
    <div id='converter' className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800/50 rounded-2xl shadow-xl p-8 w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            Converter
          </h1>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-6 mb-6">
          <div className="text-center mb-4">
            <div className="text-sm text-white mb-1">1 {fromCurrency} equals to</div>
            <div className="text-2xl font-bold text-white">
              {fromCurrency === 'INR' 
                ? exchangeRates.INR_TO_BTC.toFixed(8) 
                : exchangeRates.BTC_TO_INR.toFixed(2)} {toCurrency}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-white mb-1">1 {toCurrency} equals to</div>
            <div className="text-2xl font-bold text-white">
              {toCurrency === 'BTC' 
                ? exchangeRates.BTC_TO_INR.toFixed(2) 
                : (1 / exchangeRates.INR_TO_BTC).toFixed(2)} {fromCurrency}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <label className="block text-sm font-medium text-white mb-2">
              From
            </label>
            <div className="flex space-x-4">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 bg-slate-800/50 border border-gray-300 rounded-lg px-4 py-3 text-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0.00"
              />
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="bg-slate-800/50 border border-gray-300 rounded-lg px-4 py-3 font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="INR">INR</option>
                <option value="BTC">BTC</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={swapCurrencies}
              className="bg-gray-200 hover:bg-gray-300 rounded-full p-3 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <label className="block text-sm font-medium text-white mb-2">
              To
            </label>
            <div className="flex space-x-4">
              <input
                type="text"
                value={convertedAmount}
                readOnly
                className="flex-1 bg-slate-800/50 border border-gray-300 rounded-lg px-4 py-3 text-lg font-semibold text-white focus:outline-none"
              />
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="bg-slate-800/50 border border-gray-300 rounded-lg px-4 py-3 font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="BTC">BTC</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-white">
          <p>Exchange rate: 1 {fromCurrency} = {exchangeRate.toFixed(8)} {toCurrency}</p>
        </div>
      </div>
    </div>
  );
};