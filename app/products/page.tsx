import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Custom T-Shirts",
      description: "High-quality cotton t-shirts with custom prints",
      price: 19.99,
      category: "apparel",
      colors: ["White", "Black", "Navy", "Red"],
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 2,
      name: "Custom Mugs",
      description: "11oz ceramic mugs with vibrant prints",
      price: 12.99,
      category: "drinkware",
      colors: ["White", "Black"],
      sizes: ["11oz", "15oz"]
    },
    {
      id: 3,
      name: "Custom Posters",
      description: "High-quality poster prints on premium paper",
      price: 15.99,
      category: "prints",
      colors: ["Full Color"],
      sizes: ["12x18", "18x24", "24x36"]
    },
    {
      id: 4,
      name: "Phone Cases",
      description: "Durable phone cases for iPhone and Samsung",
      price: 14.99,
      category: "accessories",
      colors: ["Clear", "Black", "White"],
      sizes: ["iPhone 15", "iPhone 14", "Samsung S23"]
    },
    {
      id: 5,
      name: "Hoodies",
      description: "Comfortable hoodies with custom designs",
      price: 34.99,
      category: "apparel",
      colors: ["Black", "Navy", "Gray", "Red"],
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 6,
      name: "Canvas Prints",
      description: "Gallery-quality canvas prints",
      price: 29.99,
      category: "prints",
      colors: ["Full Color"],
      sizes: ["12x16", "16x20", "20x30"]
    },
    {
      id: 7,
      name: "Tote Bags",
      description: "Eco-friendly canvas tote bags",
      price: 16.99,
      category: "accessories",
      colors: ["Natural", "Black"],
      sizes: ["Standard"]
    },
    {
      id: 8,
      name: "Stickers",
      description: "Custom vinyl stickers, waterproof",
      price: 3.99,
      category: "accessories",
      colors: ["Full Color"],
      sizes: ["2x2", "3x3", "4x4"]
    },
    {
      id: 9,
      name: "Caps",
      description: "Embroidered or printed caps",
      price: 18.99,
      category: "apparel",
      colors: ["Black", "Navy", "White", "Red"],
      sizes: ["One Size"]
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
                <Link href="/products" className="text-blue-600 font-semibold">
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
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-600 text-lg">Browse our collection of customizable products</p>
        </div>

        {/* Filter Options */}
        <div className="mb-8 flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            All Products
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Apparel
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Accessories
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Prints
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Drinkware
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <span className="text-gray-400 text-6xl">🎨</span>
              </div>
              <div className="p-6">
                <span className="text-xs uppercase text-gray-500 font-semibold">{product.category}</span>
                <h3 className="text-xl font-semibold mb-2 mt-1">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">
                    <strong>Colors:</strong> {product.colors.join(", ")}
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Sizes:</strong> {product.sizes.join(", ")}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500">Starting at</span>
                    <div className="text-2xl font-bold text-blue-600">${product.price}</div>
                  </div>
                  <Link 
                    href={`/products/${product.id}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Design Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
