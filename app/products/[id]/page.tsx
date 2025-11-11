"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProductDesignPage({ params }: { params: { id: string } }) {
  const [selectedColor, setSelectedColor] = useState("White");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [customText, setCustomText] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const [fontSize, setFontSize] = useState("24");

  const product = {
    id: params.id,
    name: "Custom T-Shirt",
    description: "High-quality cotton t-shirt with custom print",
    basePrice: 19.99,
    colors: ["White", "Black", "Navy", "Red", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  };

  const totalPrice = (product.basePrice * quantity).toFixed(2);

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
              <Link href="/account" className="text-gray-700 hover:text-blue-600">
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
        <div className="mb-6">
          <Link href="/products" className="text-blue-600 hover:text-blue-700 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Design Preview */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-semibold mb-4">Design Preview</h2>
              <div 
                className="relative aspect-square rounded-lg flex items-center justify-center text-center p-8"
                style={{ 
                  backgroundColor: selectedColor === "White" ? "#FFFFFF" : 
                                 selectedColor === "Black" ? "#000000" : 
                                 selectedColor === "Navy" ? "#001F3F" : 
                                 selectedColor === "Red" ? "#FF4136" : "#808080",
                  border: selectedColor === "White" ? "1px solid #e5e7eb" : "none"
                }}
              >
                <div className="space-y-4">
                  {customText && (
                    <p 
                      style={{ 
                        color: textColor,
                        fontSize: `${fontSize}px`,
                        fontWeight: "bold"
                      }}
                    >
                      {customText}
                    </p>
                  )}
                  {!customText && (
                    <p className={selectedColor === "White" ? "text-gray-400" : "text-gray-300"}>
                      Your design will appear here
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-gray-600">
                Preview of {product.name} in {selectedColor}
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Color Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Color</label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded border-2 ${
                        selectedColor === color
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Size</label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded border-2 ${
                        selectedSize === size
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Text */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Custom Text</label>
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="Enter your custom text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              {/* Text Color */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Text Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="h-10 w-20 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              {/* Font Size */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Font Size: {fontSize}px</label>
                <input
                  type="range"
                  min="12"
                  max="72"
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Image Upload */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Upload Image</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                  <button className="mt-4 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    Select File
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 px-4 py-2 border border-gray-300 rounded-lg text-center"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price and Add to Cart */}
              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-semibold">Total Price:</span>
                  <span className="text-3xl font-bold text-blue-600">${totalPrice}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Product Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Materials</h3>
              <p className="text-gray-600">100% premium cotton for maximum comfort and durability</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Printing</h3>
              <p className="text-gray-600">High-quality direct-to-garment printing for vibrant colors</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Care Instructions</h3>
              <p className="text-gray-600">Machine wash cold, tumble dry low, do not bleach</p>
            </div>
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
