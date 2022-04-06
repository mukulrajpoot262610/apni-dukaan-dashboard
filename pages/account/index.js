import Head from 'next/head'
import React from 'react'
import Header from '../../components/Dashboard/Header'
import Stats from '../../components/Dashboard/Stats'

const Account = () => {
    return (
        <section className="w-full min-h-screen flex justify-center items-center">
            <Head>
                <title>Dashboard - Apni Dukaan</title>
            </Head>
            <div className="w-full h-full">
                <Header />
                <Stats />
            </div>
        </section>
    )
}

export default Account