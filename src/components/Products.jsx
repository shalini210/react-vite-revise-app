import React, { useEffect, useState, useContext } from 'react';
import prdts from './productsdata';
import { Link, useParams } from 'react-router-dom';
import Rating from './Rating';
import { CartContext } from '../context/Cartcontext';
import { UserContext } from '../context/UserContext';
import ItemCounter from './ItemCounter';

export default function Products() {
    const params = useParams();
    const category = params.category;
    const User = useContext(UserContext);
    const Cart = useContext(CartContext);
    
    const [productsUI, setProductsUI] = useState([]);

    useEffect(() => {
        console.log("Cart Items:", Cart.items);

        const filteredProducts = prdts.filter(p => !category || p.category === category);

        const ui = filteredProducts.map(p => (
            <div key={p.id} className="bg-white shadow-lg rounded-2xl p-4 transform transition duration-300 hover:scale-105">
                <img src={p.img} alt={p.name} className="w-32 h-32 object-cover mx-auto rounded-lg" />
                <div className="mt-3 text-center">
                    <h3 className="text-lg font-bold text-gray-700">{p.name}</h3>
                    <Rating n={p.rating} />
                    <div className="mt-2">
                        <ItemCounter pid={p.id} />
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <Link 
                        to={`/productdetails/${p.id}`} 
                        className="px-4 py-2 text-sm font-semibold bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
                        View Details
                    </Link>
                </div>
            </div>
        ));

        setProductsUI(ui);
    }, [params, Cart.items]);

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Welcome, {User?.username || "Guest"}! 🎉
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productsUI}
            </div>
        </div>
    );
}
