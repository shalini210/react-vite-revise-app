import React, { useContext } from 'react';
import { CartContext } from '../context/Cartcontext';

export default function Cart() {
    const cart = useContext(CartContext);

    // Calculate totals dynamically
    let totalItems = 0;
    let totalAmount = 0;

    const cartDataUi = cart.items.map((item, index) => {
        const itemTotal = item.qty * parseInt(item.price.replaceAll(",", ""));
        totalItems += item.qty;
        totalAmount += itemTotal;

        return (
            <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4 text-gray-700">{index + 1}</td>
                <td className="py-3 px-4 font-medium text-gray-900">{item.itemname}</td>
                <td className="py-3 px-4 text-green-600 font-semibold">{item.price}</td>
                <td className="py-3 px-4 text-blue-600 font-semibold">{item.qty}</td>
                <td className="py-3 px-4 text-gray-800 font-bold">{itemTotal}</td>
            </tr>
        );
    });

    return (
        <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">🛒 Shopping Cart</h2>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-blue-600 text-white uppercase">
                        <tr>
                            <th className="py-3 px-4 text-left">S.No</th>
                            <th className="py-3 px-4 text-left">Item Name</th>
                            <th className="py-3 px-4 text-left">Price</th>
                            <th className="py-3 px-4 text-left">Qty</th>
                            <th className="py-3 px-4 text-left">Total</th>
                        </tr>
                    </thead>
                    <tbody>{cartDataUi}</tbody>
                </table>
            </div>

            {/* Total Summary */}
            <div className="bg-blue-900 text-white mt-6 p-4 rounded-lg text-lg text-center shadow-md">
                <p className="mb-2"><strong>Total Items:</strong> {totalItems}</p>
                <p className="mb-0"><strong>Bill:</strong> ₹{totalAmount.toLocaleString()}</p>
            </div>
        </div>
    );
}
