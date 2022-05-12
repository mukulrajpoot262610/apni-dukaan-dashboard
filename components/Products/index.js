import Image from 'next/image'
import React from 'react'

const ProductList = ({ products }) => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap -m-4">

                {
                    products?.map(e => <div key={e._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <Image layout='fill' objectFit='contain' objectPosition="bottom" alt="ecommerce" src={e.image[0]} />
                        </a>
                        <div className='flex justify-between items-start'>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY: {e.category}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">{e.name}</h2>
                                <p className="mt-1">₹{e.mrp}</p>
                            </div>
                            <div className='mt-4'>
                            </div>
                        </div>
                    </div>)
                }


            </div>
        </div>
    )
}

export default ProductList