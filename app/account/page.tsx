"use client";

import Link from "next/link";
import { useState } from "react";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("orders");

  const orders = [
    {
      id: "ORD-001",
      date: "2024-11-10",
      status: "Delivered",
      total: 45.97,
      items: 2
    },
    {
      id: "ORD-002",
      date: "2024-11-08",
      status: "In Production",
      total: 29.99,
      items: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                PrintOnDemand
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/products" className="text-gray-700 hover:text-blue-600">
                  Products
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/account" className="text-blue-600 font-semibold">
                Account
              </Link>
              <Link href="/cart" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Cart (0)
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-4">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === "orders" ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                  }`}
                >
                  My Orders
                </button>
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === "profile" ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                  }`}
                >
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab("addresses")}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === "addresses" ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                  }`}
                >
                  Addresses
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === "settings" ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                  }`}
                >
                  Settings
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {activeTab === "orders" && (
              <div className="bg-white rounded-lg shadow p-8">
                <h2 className="text-2xl font-bold mb-6">My Orders</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">Order {order.id}</h3>
                          <p className="text-sm text-gray-600">Placed on {order.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          order.status === "Delivered" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-gray-600">{order.items} item(s)</p>
                          <p className="font-semibold text-lg">${order.total.toFixed(2)}</p>
                        </div>
                        <Link 
                          href={`/account/orders/${order.id}`}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          View Details →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="bg-white rounded-lg shadow p-8">
                <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            )}

            {activeTab === "addresses" && (
              <div className="bg-white rounded-lg shadow p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Saved Addresses</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Add New Address
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="border rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold mb-2">Home</h3>
                        <p className="text-gray-600">John Doe</p>
                        <p className="text-gray-600">123 Main Street</p>
                        <p className="text-gray-600">New York, NY 10001</p>
                        <p className="text-gray-600">United States</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        Default
                      </span>
                    </div>
                    <div className="flex space-x-4">
                      <button className="text-blue-600 hover:text-blue-700">Edit</button>
                      <button className="text-red-600 hover:text-red-700">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white rounded-lg shadow p-8">
                <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Change Password</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Current Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">New Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Confirm New Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                      >
                        Update Password
                      </button>
                    </form>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4">Email Preferences</h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-3" />
                        <span>Order updates and shipping notifications</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-3" />
                        <span>New product announcements</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3" />
                        <span>Promotional offers and discounts</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PrintOnDemand</h3>
              <p className="text-gray-400">Create custom products with ease. No minimum order required.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products" className="hover:text-white">All Products</Link></li>
                <li><Link href="/products?category=apparel" className="hover:text-white">Apparel</Link></li>
                <li><Link href="/products?category=accessories" className="hover:text-white">Accessories</Link></li>
                <li><Link href="/products?category=prints" className="hover:text-white">Prints</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/account" className="hover:text-white">My Account</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/shipping" className="hover:text-white">Shipping Info</Link></li>
                <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PrintOnDemand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
