"use client"
import { useState } from 'react';
import {
    Home,
    Search,
    TrendingUp,
    Wallet,
    BarChart3,
    Settings,
    Bell,
    ChevronDown,
    Menu,
    X
} from 'lucide-react';
export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('overview');
    const [timeRange, setTimeRange] = useState('day');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const sidebarItems = [
        { icon: Home, label: 'Home', active: true },
        { icon: TrendingUp, label: 'Markets' },
        { icon: BarChart3, label: 'Portfolio' },
        { icon: Wallet, label: 'Wallet' },
        { icon: Settings, label: 'Settings' },
    ];
    const cryptoData = [
        { name: 'BTC Bitcoin', symbol: 'BTC', price: 65000.30, change: 6.2 },
        { name: 'BNB BNB', symbol: 'BNB', price: 623.19, change: 10.5 },
        { name: 'ETH Ethereum', symbol: 'ETH', price: 3527.55, change: 1.4 },
        { name: 'LTC Litecoin', symbol: 'LTC', price: 118.20, change: 20.23 },
        { name: 'ADA Cardano', symbol: 'ADA', price: 32.12, change: 19.05 },
    ];
    const marketStats = [
        { label: 'Targets', value: '85%' },
        { label: 'Market Trend', value: 'Bullish' },
    ];
    return (
        <div className="flex h-screen bg-gray-50">
            <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300`}>
                <div className="p-6 border-b border-gray-200">
                    {isSidebarOpen ? (
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                            <span className="text-xl font-bold text-gray-800">A-CENTRO AI</span>
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
                                className={`flex items-center w-full p-3 rounded-lg transition-colors cursor-pointer ${item.active
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
                <header className="bg-white border-b border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
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
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                        {cryptoData.slice(0, 5).map((crypto, index) => (
                            <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
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

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-xl p-4 border border-gray-200">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                                        {['overview', 'day', 'week', 'month'].map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveTab(tab)}
                                                className={`px-4 py-2 rounded-md text-sm font-medium capitalize cursor-pointer ${activeTab === tab
                                                        ? 'bg-white text-gray-900 shadow-sm'
                                                        : 'text-gray-600 hover:text-gray-900'
                                                    }`}
                                            >
                                                {tab === 'overview' ? 'Overview' : tab}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                                        {['day', 'week', 'month'].map((range) => (
                                            <button
                                                key={range}
                                                onClick={() => setTimeRange(range)}
                                                className={`px-3 py-1 rounded text-xs font-medium capitalize cursor-pointer ${timeRange === range
                                                        ? 'bg-blue-500 text-white'
                                                        : 'text-gray-600 hover:text-gray-900'
                                                    }`}
                                            >
                                                {range}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <BarChart3 size={48} className="text-blue-400 mx-auto mb-2" />
                                        <div className="text-gray-500">Trading Chart</div>
                                        <div className="text-sm text-gray-400">Interactive price chart would appear here</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <div className="p-4 border-b border-gray-200">
                                    <h3 className="font-semibold text-gray-800">Market Overview</h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th className="text-left p-4 text-sm font-medium text-gray-600">Name</th>
                                                <th className="text-right p-4 text-sm font-medium text-gray-600">Last Price</th>
                                                <th className="text-right p-4 text-sm font-medium text-gray-600">24h Change</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cryptoData.map((crypto, index) => (
                                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="p-4">
                                                        <div className="flex items-center">
                                                            <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                                            <div>
                                                                <div className="font-medium text-gray-900">{crypto.name}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right p-4 font-medium text-gray-900">
                                                        ${crypto.price.toLocaleString()}
                                                    </td>
                                                    <td className="text-right p-4">
                                                        <span className={`font-medium ${crypto.change >= 0 ? 'text-green-500' : 'text-red-500'
                                                            }`}>
                                                            {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                <h3 className="font-semibold text-gray-800 mb-4">Market Statistics</h3>
                                <div className="space-y-4">
                                    {marketStats.map((stat, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                            <span className="text-gray-600">{stat.label}</span>
                                            <span className="font-semibold text-gray-900">{stat.value}</span>
                                        </div>
                                    ))}

                                    <div className="mt-6">
                                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                                            <span>Target Achievement</span>
                                            <span>85%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                <h3 className="font-semibold text-gray-800 mb-4">Quick Actions</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="cursor-pointer p-3 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                                        Buy Crypto
                                    </button>
                                    <button className="cursor-pointer p-3 bg-green-50 text-green-600 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                                        Sell Assets
                                    </button>
                                    <button className="cursor-pointer p-3 bg-purple-50 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors">
                                        Transfer
                                    </button>
                                    <button className="cursor-pointer p-3 bg-orange-50 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-100 transition-colors">
                                        Swap
                                    </button>
                                </div>
                            </div>

                            <div className="bg-blue-500  rounded-xl p-6 text-white">
                                <h3 className="font-semibold mb-2">AI Market Analysis</h3>
                                <p className="text-sm opacity-90 mb-4">
                                    Current market sentiment: <strong>Bullish</strong>
                                </p>
                                <div className="text-xs space-y-2">
                                    <div className="flex justify-between">
                                        <span>BTC Prediction</span>
                                        <span>↑ $68,000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>ETH Prediction</span>
                                        <span>↑ $3,800</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Confidence</span>
                                        <span>87%</span>
                                    </div>
                                </div>
                                <button className="cursor-pointer w-full mt-4 bg-white text-blue-600 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                                    View Full Analysis
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}