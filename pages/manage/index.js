import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { FiUsers, FiEdit3 } from 'react-icons/fi'
import { SiWolframmathematica } from 'react-icons/si'
import { FaRegMoneyBillAlt } from 'react-icons/fa'

const Manage = () => {
    return (
        <section className="text-gray-600 body-font p-4 lg:p-10 relative">
            <Head>
                <title>Manage - ApniDukaan</title>
            </Head>

            <div className='w-full mt-12 flex justify-between flex-col gap-5 lg:flex-row'>
                <h1 className='font-bold text-xl'>Manage your Store</h1>
            </div>

            <div className='w-full mt-12 grid grid-cols-2 gap-5'>
                <div className='border-2 rounded-xl flex p-2 items-center gap-4 cursor-pointer'>
                    <FiUsers className=' text-6xl bg-yellow-100 text-yellow-500 rounded-lg p-3' />
                    <h1 className='font-semibold'>My Customers</h1>
                </div>
                <div className='border-2 rounded-xl flex p-2 items-center gap-4 cursor-pointer'>
                    <FiEdit3 className=' text-6xl bg-yellow-100 text-yellow-500 rounded-lg p-3' />
                    <h1 className='font-semibold'>Edit Store Details</h1>
                </div>
                <div className='border-2 rounded-xl flex p-2 items-center gap-4 cursor-pointer'>
                    <SiWolframmathematica className=' text-6xl bg-yellow-100 text-yellow-500 rounded-lg p-3' />
                    <h1 className='font-semibold'>Theme Customization</h1>
                </div>
                <div className='border-2 rounded-xl flex p-2 items-center gap-4 cursor-pointer'>
                    <FaRegMoneyBillAlt className=' text-6xl bg-yellow-100 text-yellow-500 rounded-lg p-3' />
                    <h1 className='font-semibold'>Extra Charges</h1>
                </div>
            </div>

        </section>
    )
}

export default Manage