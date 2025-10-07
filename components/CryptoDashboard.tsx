"use client"
export default function CryptoDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">BTC - BITCOIN</span>
              <span className="text-green-400">↑ 2.34%</span>
            </div>
            <div className="text-2xl font-bold mt-2">$ 43250.50</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">ETH - ETHEREUM</span>
              <span className="text-red-400">↓ 1.12%</span>
            </div>
            <div className="text-2xl font-bold mt-2">$ 2280.75</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">SOL - SOLANA</span>
              <span className="text-green-400">↑ 5.67%</span>
            </div>
            <div className="text-2xl font-bold mt-2">$ 98.42</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">BNB - BINANCE</span>
              <span className="text-green-400">↑ 1.89%</span>
            </div>
            <div className="text-2xl font-bold mt-2">$ 312.80</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">ADA - CARDANO</span>
              <span className="text-red-400">↓ 0.45%</span>
            </div>
            <div className="text-2xl font-bold mt-2">$ 0.52</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">XRP - XRP</span>
              <span className="text-green-400">↑ 3.21%</span>
            </div>
            <div className="text-2xl font-bold mt-2">$ 0.61</div>
          </div>      
        </div>
      </div>
      <div className="h-px bg-gray-700 my-8"></div>
      <div>
        <h2 className="text-2xl font-bold mb-6">Targets</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Market Trend</h3>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="text-left p-4">Name</th>
                  <th className="text-left p-4">Last Price</th>
                  <th className="text-left p-4">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="p-4">BTC Bitcoin</td>
                  <td className="p-4">$ 65,000.30</td>
                  <td className="p-4 text-green-400">62.24</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4">BNB BNB</td>
                  <td className="p-4">$ 623.19</td>
                  <td className="p-4 text-green-400">10.58</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4">ETH Ethereum</td>
                  <td className="p-4">$ 3,527.55</td>
                  <td className="p-4 text-green-400">1.42</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4">LTC Litecoin</td>
                  <td className="p-4">$ 119.20</td>
                  <td className="p-4 text-green-400">20.23</td>
                </tr>
                <tr>
                  <td className="p-4">ADA Cardano</td>
                  <td className="p-4">$ 32.12</td>
                  <td className="p-4 text-green-400">19.05</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}