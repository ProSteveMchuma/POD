import Link from "next/link";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Custom T-Shirts",
      description: "Design your own t-shirts with custom text and images",
      image: "/products/tshirt.jpg",
      price: 19.99,
      category: "apparel"
    },
    {
      id: 2,
      name: "Custom Mugs",
      description: "Create personalized mugs for any occasion",
      image: "/products/mug.jpg",
      price: 12.99,
      category: "drinkware"
    },
    {
      id: 3,
      name: "Custom Posters",
      description: "Print high-quality custom posters",
      image: "/products/poster.jpg",
      price: 15.99,
      category: "prints"
    },
    {
      id: 4,
      name: "Phone Cases",
      description: "Design custom phone cases for your device",
      image: "/products/phonecase.jpg",
      price: 14.99,
      category: "accessories"
    },
    {
      id: 5,
      name: "Hoodies",
      description: "Create custom hoodies with your design",
      image: "/products/hoodie.jpg",
      price: 34.99,
      category: "apparel"
    },
    {
      id: 6,
      name: "Canvas Prints",
      description: "Transform your photos into stunning canvas art",
      image: "/products/canvas.jpg",
      price: 29.99,
      category: "prints"
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Create Custom Products with Ease
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Design and order custom printed products - No minimum order, Fast delivery
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/products" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Browse Products
              </Link>
              <Link 
                href="/products/1" 
                className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
              >
                Start Designing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Minimum Order</h3>
              <p className="text-gray-600">Order as few or as many as you need</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Production</h3>
              <p className="text-gray-600">Quick turnaround time on all orders</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">Premium materials and printing quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-6xl">🎨</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <Link 
                      href={`/products/${product.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                      Customize
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Choose Product</h3>
              <p className="text-gray-600">Select from our wide range of products</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-gray-600">Upload images or add text to customize</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Order</h3>
              <p className="text-gray-600">Place your order with secure checkout</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Receive</h3>
              <p className="text-gray-600">Get your custom products delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
