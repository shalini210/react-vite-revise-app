import React, { useEffect, useRef, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import prdts from './productsdata';
import Rating from './Rating';
import ItemCounter from './ItemCounter';
import { CartContext } from '../context/Cartcontext';
import { UserContext } from '../context/UserContext';

export default function ProductDetails() {
    const { pid } = useParams();
    const User = useContext(UserContext);
    const Cart = useContext(CartContext);

    // Find product by ID
    const [productInfo, setProductInfo] = useState(prdts.find(p => p.id == pid));
    const imgRef = useRef();

    if (!productInfo) {
        return <div className="text-center text-red-500 font-semibold text-xl mt-10">Product Not Found! ❌</div>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Welcome, {User?.username || "Guest"}! 🎉
            </h1>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left Section: Product Images */}
                <div className="lg:w-1/2 flex flex-col items-center">
                    <img 
                        ref={imgRef} 
                        src={productInfo.img} 
                        className="border rounded-lg w-72 h-72 object-cover shadow-lg" 
                        alt={productInfo.name} 
                    />
                    <div className="flex gap-3 mt-4">
                        {productInfo.additionalImages.map((img, index) => (
                            <img 
                                key={index} 
                                src={img} 
                                onClick={() => imgRef.current.src = img} 
                                className="w-16 h-16 border rounded-lg cursor-pointer hover:scale-105 transition"
                                alt="Thumbnail"
                            />
                        ))}
                    </div>
                    <div className="flex gap-4 mt-3 text-lg font-semibold">
                        Ratings: <Rating n={productInfo.rating} />
                    </div>
                </div>

                {/* Right Section: Product Details */}
                <div className="lg:w-1/2 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-700">{productInfo.name}</h2>
                    <p className="text-gray-500">{productInfo.des}</p>

                    <div className="grid grid-cols-2 gap-3 text-gray-700">
                        <div><strong>Brand:</strong> {productInfo.brand}</div>
                        <div><strong>Company:</strong> {productInfo.company}</div>
                        <div><strong>Model No:</strong> {productInfo.modelno}</div>
                        <div><strong>Price:</strong> ₹{productInfo.price}</div>
                        <div><strong>Weight:</strong> {productInfo.weight}</div>
                        <div><strong>Category:</strong> {productInfo.category}</div>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-600">Key Features:</h3>
                        <ul className="list-disc list-inside text-gray-500">
                            {productInfo.keyfeatures.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6">
                        <ItemCounter pid={pid} />
                    </div>
                </div>
            </div>
        </div>
    );
}
