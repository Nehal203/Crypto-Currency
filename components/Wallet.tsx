"use client"
import Navbar from "@/components/Navbar";
import React from "react";
export default function Wallet() {
  const coins = [
    { symbol: "BTC", name: "Bitcoin", balance: 0.5234, price: 54000 },
    { symbol: "ETH", name: "Ethereum", balance: 2.134, price: 3600 },
    { symbol: "USDT", name: "Tether", balance: 1200, price: 1 },
  ];
  const transactions = [
    { id: "TXN-001", type: "Receive", coin: "ETH", amount: 0.5, date: "2025-10-06" },
    { id: "TXN-002", type: "Send", coin: "BTC", amount: 0.02, date: "2025-10-05" },
    { id: "TXN-003", type: "Swap", coin: "USDT", amount: 200, date: "2025-10-02" },
  ];
  const totalFiat = coins
    .map((c) => c.balance * c.price)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
  return (
    <div  className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-white">My Wallet</h1>
              <p className="text-sm text-gray-500">Non-custodial • Last synced: Oct 8, 2025</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white cursor-pointer">Import Wallet</button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white cursor-pointer">Create Wallet</button>
            </div>
          </div>
          <section className="bg-white rounded-2xl shadow p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm text-gray-500">Portfolio balance</h2>
                <div className="mt-2 flex items-end gap-4">
                  <div>
                    <div className="text-3xl font-bold">${totalFiat}</div>
                    <div className="text-xs text-gray-400">3 assets • 2 chains</div>
                  </div>
                  <div className="text-sm text-green-500">+4.2% (24h)</div>
                </div>
              </div>
              <div className="w-48 h-20">
                <svg viewBox="0 0 100 30" className="w-full h-full">
                  <polyline
                    fill="none"
                    stroke="#34D399"
                    strokeWidth="2"
                    points="0,20 10,18 20,12 30,10 40,8 50,9 60,6 70,7 80,4 90,2 100,6"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <button className="p-4 rounded-lg border text-left">
                <div className="text-sm text-gray-500">Send</div>
                <div className="font-medium mt-1">Pay crypto</div>
              </button>
              <button className="p-4 rounded-lg border text-left">
                <div className="text-sm text-gray-500">Receive</div>
                <div className="font-medium mt-1">Show address / QR</div>
              </button>
              <button className="p-4 rounded-lg border text-left">
                <div className="text-sm text-gray-500">Swap</div>
                <div className="font-medium mt-1">Instant swap</div>
              </button>
            </div>
          </section>
          <section className="bg-white rounded-2xl shadow p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Assets</h3>
            <div className="space-y-4">
              {coins.map((c) => (
                <div key={c.symbol} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-semibold">{c.symbol}</div>
                    <div>
                      <div className="font-medium">{c.name}</div>
                      <div className="text-xs text-gray-400">{c.balance} {c.symbol}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${(c.balance * c.price).toFixed(2)}</div>
                    <div className="text-xs text-gray-400">${c.price} / {c.symbol}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <div className="text-xs text-black  cursor-pointer">View all</div>
            </div>
            <div className="space-y-3">
              {transactions.map((t) => (
                <div key={t.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div>
                    <div className="font-medium">{t.type} • {t.coin}</div>
                    <div className="text-xs text-gray-400">{t.date} • ID: {t.id}</div>
                  </div>
                  <div className="text-right font-medium">{t.amount} {t.coin}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <aside className="col-span-4">
          <div className="bg-white rounded-2xl shadow p-4 mb-6">
            <h4 className="text-sm text-gray-500">Wallet Address</h4>
            <div className="mt-3 flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center">QR</div>
              <div className="flex-1">
                <div className="text-sm font-mono text-xs break-all">0xA1b2...9fE3c4D5</div>
                <div className="text-xs text-gray-400 mt-1">Ethereum (ERC-20)</div>
              </div>
              <button className="px-3 py-1 rounded border cursor-pointer">Copy</button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-4 mb-6">
            <h4 className="text-sm text-gray-500">Staking</h4>
            <div className="mt-3">
              <div className="font-medium">ETH Staking</div>
              <div className="text-xs text-gray-400">APY: 4.1% • Locked</div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 px-3 py-2 rounded border cursor-pointer">Stake</button>
                <button className="flex-1 px-3 py-2 rounded border cursor-pointer">Unstake</button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-4 mb-6">
            <h4 className="text-sm text-gray-500">dApps</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center justify-between"><span>Swap (DEX)</span><span className="text-xs text-gray-400">Uniswap</span></li>
              <li className="flex items-center justify-between"><span>Bridge</span><span className="text-xs text-gray-400">Polygon</span></li>
              <li className="flex items-center justify-between"><span>NFT Marketplace</span><span className="text-xs text-gray-400">OpenSea</span></li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <h4 className="text-sm text-gray-500">Security</h4>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex items-center justify-between"><span>2FA</span><span className="text-xs text-gray-400">Enabled</span></div>
              <div className="flex items-center justify-between"><span>Backup Seed</span><span className="text-xs text-gray-400">Saved</span></div>
              <div className="flex items-center justify-between"><span>Hardware Wallet</span><span className="text-xs text-gray-400">Not connected</span></div>
            </div>
          </div>
        </aside>
      </div>
      <div className="max-w-6xl mx-auto mt-6 text-sm text-white">
        <h5 className="font-semibold mb-2">Fields & details suggested to include in the final product:</h5>
        <ul className="list-disc ml-6 space-y-1">
          <li>Wallet name / label (customizable)</li>
          <li>Network selector (Mainnet / Testnet / Custom RPC)</li>
          <li>Full address + copy & share options & QR</li>
          <li>Transaction details (tx hash, confirmations, gas used, explorer link)</li>
          <li>Fiat conversion & price source attribution</li>
          <li>Backup & recovery workflow (seed phrase steps with warnings)</li>
          <li>Security settings (MFA, biometric options, hardware wallet pairing)</li>
          <li>Notifications (price alerts, large transfer alerts, whitelisted addresses)</li>
          <li>Privacy controls (coinjoin/Tornado links, analytics opt-out)</li>
          <li>Support links, legal & KYC flow if custodial features exist</li>
        </ul>
      </div>
    </div>
  );
}
