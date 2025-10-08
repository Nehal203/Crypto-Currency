"use client"
import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
interface CryptoData {
  symbol: string;
  name: string;
  price: number;
  change: number;
}
export default function CryptoTicker() {
  const [cryptoData] = useState<CryptoData[]>([
    { symbol: 'BTC', name: 'Bitcoin', price: 43250.50, change: 2.34 },
    { symbol: 'ETH', name: 'Ethereum', price: 2280.75, change: -1.12 },
    { symbol: 'SOL', name: 'Solana', price: 98.42, change: 5.67 },
    { symbol: 'BNB', name: 'Binance Coin', price: 312.80, change: 1.89 },
    { symbol: 'ADA', name: 'Cardano', price: 0.52, change: -0.45 },
    { symbol: 'XRP', name: 'Ripple', price: 0.61, change: 3.21 },
    { symbol: 'MATIC', name: 'Polygon', price: 0.78, change: 4.15 },
    { symbol: 'DOT', name: 'Polkadot', price: 6.92, change: -2.03 },
  ]);
  const [displayData, setDisplayData] = useState<CryptoData[]>([]);
  useEffect(() => {
    setDisplayData([...cryptoData, ...cryptoData]);
  }, [cryptoData]);
  return (
    <div className="bg-slate-800/50 border-y border-slate-700 py-4 overflow-hidden relative">
      <div className="animate-scroll flex space-x-8 whitespace-nowrap">
        {displayData.map((crypto, index) => (
          <div
            key={`${crypto.symbol}-${index}`}
            className="inline-flex items-center space-x-4 px-4"
          >
            <div className="flex items-center space-x-2">
              <span className="text-white font-semibold">{crypto.symbol}</span>
              <span className="text-white font-bold">${crypto.price.toLocaleString()}</span>
            </div>
            <div
              className={`flex items-center space-x-1 ${
                crypto.change >= 0 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {crypto.change >= 0 ? (
                <TrendingUp size={14} />
              ) : (
                <TrendingDown size={14} />
              )}
              <span className="text-sm font-medium">
                {Math.abs(crypto.change)}%
              </span>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
