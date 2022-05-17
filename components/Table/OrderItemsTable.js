import Link from 'next/link'
import React from 'react'

const OrderItemsTable = ({ orders }) => {
    return (
        <div className="overflow-x-auto w-full my-4 border">
            <div className="overflow-hidden">
                <table className="w-full divide-y divide-black">

                    <thead className="bg-black text-white">
                        <tr>
                            <th
                                scope="col"
                                className="py-3 px-6 text-left"
                            >
                                Product
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm uppercase font-bold"
                            >
                                Quantity
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm uppercase font-bold"
                            >
                                Price
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm uppercase font-bold"
                            >
                                Total
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-black">
                        {orders?.map((order, i) => (
                            <tr key={order._id}>
                                <td className="px-6 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <img src={order.product.image} className="h-10 w-10" />
                                        <div className="text-sm text-gray-400 font-bold">{order.product.name}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">{order.qty}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">₹{order.product.discountedPrice}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">₹{order.product.discountedPrice * order.qty}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderItemsTable