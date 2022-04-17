import Link from 'next/link'
import React from 'react'

const ProductHeader = () => {
    return (
        <div className='w-full mt-12 flex justify-between flex-col gap-5 lg:flex-row'>
            <div className="form-control">
                <div className="relative">
                    <input type="text" placeholder="Search" className="w-full pr-16 input input-bordered" />
                    <button className="absolute top-0 right-0 rounded-l-none btn">go</button>
                </div>
            </div>
            <Link href="/products/add" passHref>
                <button className='fixed lg:static btn bottom-20 left-1/2 -translate-x-1/2 lg:translate-x-0 z-40'>Add new Product</button>
            </Link>
        </div>
    )
}

export default ProductHeader