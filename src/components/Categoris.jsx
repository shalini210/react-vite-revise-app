import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import prdts from './productsdata';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const uniqueCategories = [];
        
        prdts.forEach((p) => {
            if (uniqueCategories.findIndex((c) => c.category === p.category) < 0) {
                uniqueCategories.push({ category: p.category, img: p.img });
            }
        });

        setCategories(uniqueCategories);
    }, []);

    return (
        <div className="max-w-6xl mx-auto my-8 px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🛍️ Explore Categories</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((c, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                        <img 
                            src={c.img} 
                            alt={c.category} 
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-900">{c.category}</h3>
                            <Link 
                                to={`/products/${c.category}`} 
                                className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 hover:bg-blue-700"
                            >
                                View All →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
