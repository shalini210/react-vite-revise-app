import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/ProductsDetails';
import Cart from './components/Cart';
import Categories from './components/Categoris';
import { CartContext } from './context/Cartcontext';
import { UserContext } from './context/UserContext';

function App() {
  const [masterItems, setMasterItems] = useState([]);

  return (
    <UserContext.Provider value={{ username: "John" }}>
      <CartContext.Provider value={{ items: masterItems, setitems: setMasterItems }}>
        
        {/* 🌟 Navigation Bar */}
        <nav className="bg-gray-900 text-white py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
            <h1 className="text-2xl font-bold">ShopEasy 🛒</h1>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-yellow-400 transition">Categories</Link>
              <Link to="/products" className="hover:text-yellow-400 transition">Products</Link>
              <Link to="/cart" className="hover:text-yellow-400 transition">🛍 Cart</Link>
            </div>
          </div>
        </nav>

        {/* 🌟 Page Content */}
        <div className="p-6 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/productdetails/:pid" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>

      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
