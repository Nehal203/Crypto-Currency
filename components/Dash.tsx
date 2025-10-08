"use client"
import { useState } from "react";
import { Search, Menu, X, Bell, ChevronDown, icons, Home, Wallet, TrendingUp, BarChart3, Settings } from "lucide-react";
export default function Dash() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const sidebarItems = [
        { icon: Home, label: 'Home', active: true },
        { icon: TrendingUp, label: 'Markets' },
        { icon: BarChart3, label: 'Portfolio' },
        { icon: Wallet, label: 'Wallet' },
        { icon: Settings, label: 'Settings' }
    ];
    const cryptoData = [
        { name: 'BTC Bitcoin', symbol: 'BTC', price: 65000.30, change: 6.2 },
        { name: 'ETH Ethereum', symbol: 'ETH', price: 3527.55, change: -1.4 },
        { name: 'BNB BNB', symbol: 'BNB', price: 623.19, change: 10.5 },
        { name: 'ATOM', symbol: 'BTC', price: 20.55, change: 22.1 },
        { name: 'USDC', symbol: 'USDC', price: 1027.01, change: -26.8 }
    ]
    return (
        <div className="flex h-screen bg-gray-50">
            <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300`}>
                <div className="p-6 border-b border-gray-200">
                    {isSidebarOpen ? (
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                            <span className="text-xl font-bold text-gray-800">Crypto Tacker</span>
                        </div>
                    ) : (
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mx-auto"></div>
                    )}
                </div>
                <nav className="p-4 space-y-2">
                    {sidebarItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={index}
                                className={`cursor-pointer flex items-center w-full p-3 rounded-lg transition-colors ${item.active
                                    ? 'bg-blue-50 text-blue-600 border border-blue-200'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <Icon size={20} />
                                {isSidebarOpen && <span className="ml-3 font-medium">{item.label}</span>}
                            </button>
                        );
                    })}
                </nav>
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-white border-b p-4 border-gray-500">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                className="p-2 hover:bg-gray-100 rounded-lg"
                            >
                                {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            {/* <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                            <Bell size={20} />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                        </button> */}
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                {isSidebarOpen && (
                                    <>
                                        <span className="font-medium">User</span>
                                        <ChevronDown size={16} />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </header>
                <div className="flex-1 overflow-auto p-6">
                    <div className=" grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                        {cryptoData.slice(0, 5).map((crypto, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="font-semibold text-gray-800">{crypto.symbol} - USD</div>
                                        <div className="text-2xl font-bold text-gray-900">
                                            {crypto.price.toLocaleString()}
                                        </div>
                                    </div>
                                    <div className={`text-sm font-semibold ${crypto.change >= 0 ? 'text-green-500' : 'text-red-500'
                                        }`}>
                                        {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="">
                        <div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}



