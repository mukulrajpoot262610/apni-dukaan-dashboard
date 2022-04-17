import Head from 'next/head'
import Router from "next/router";
import React, { useEffect } from 'react'
import Loader from '../../components/Loader'
import ProductList from '../../components/Products';
import ProductFilter from '../../components/Products/ProductFilter';
import ProductHeader from '../../components/Products/ProductHeader';

const Products = () => {
    return (
        <>
            <section className="text-gray-600 body-font p-4 lg:p-10 relative">
                <Head>
                    <title>Product</title>
                </Head>

                <ProductHeader />

                <ProductFilter />

                <ProductList />

            </section>
        </>
    )
}

export default Products