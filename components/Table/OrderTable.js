import Link from "next/link"
import { useRouter } from "next/router"

export default function OrderTable({ orders }) {

    const router = useRouter()

    return (
        <div className="overflow-x-auto w-full py-2">
            <div className="overflow-hidden border-2 rounded-lg border-t-0">
                <table className="w-full divide-y-2 divide-black">

                    <thead className="bg-black text-white">
                        <tr>
                            <th
                                scope="col"
                                className="py-3 px-6 text-left uppercase"
                            >
                                Order No.
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm uppercase font-bold"
                            >
                                Date
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
                                Status
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Total</span>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y-2 divide-black">
                        {orders?.map((order, i) => (
                            <Link href={`/order/${order._id}`} passHref key={order._id}>
                                <tr className="cursor-pointer">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        #{order._id.slice(0, 6)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="">
                                            <div className="text-sm font-bold capitalize">{order.createdAt.split("T")[0]}</div>
                                            <div className="text-xs text-gray-400">YYYY-MM-DD</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm capitalize text-gray-900">
                                            {order.orderItems.length} Item
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.status ? order.status : "On the Way"}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <div className="text-sm font-bold text-gray-900">₹{order.totalPrice}</div>
                                    </td>
                                </tr>
                            </Link>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}