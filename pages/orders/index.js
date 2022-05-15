import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import OrderTable from '../../components/Table/OrderTable'
import { GetAllOrders } from '../../services/apiClient'

const Orders = () => {

    const [orderState, setOrderState] = useState()

    useEffect(() => {
        const fetchData = async () => {

            try {
                const res = await GetAllOrders()
                setOrderState(res.data.orders)
                console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])

    return (
        <section className="text-gray-600 body-font p-4 lg:p-10 relative">
            <Head>
                <title>Orders - ApniDukaan</title>
            </Head>

            <div className='w-full mt-12 flex justify-between flex-col gap-5 lg:flex-row'>
                <h1 className='font-bold text-xl'>Your Orders</h1>
            </div>

            <main className="flex flex-col justify-center items-center mt-12">

                <OrderTable orders={orderState} setOrderState={setOrderState}
                />
            </main>

        </section>
    )
}

export default Orders