import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import ProductList from '../../components/Products';
import ProductFilter from '../../components/Products/ProductFilter';
import ProductHeader from '../../components/Products/ProductHeader';
import { GetAllProducts } from '../../services/apiClient';

const Products = () => {

    const [response, setResponse] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await GetAllProducts()
                setResponse(data.products)
            } catch (err) {
                console.log(err)
                toast.error('Error Occured')
            }
        }

        fetchData()
    }, [])

    return (
        <>
            <section className="text-gray-600 body-font p-4 lg:p-10 relative">
                <Head>
                    <title>Product</title>
                </Head>

                <ProductHeader />

                <ProductFilter />

                <ProductList products={response} />

            </section>
        </>
    )
}

export default Products