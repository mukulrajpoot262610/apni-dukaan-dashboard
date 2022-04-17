import Head from 'next/head'
import React from 'react'
import Header from '../../components/Dashboard/Header'
import Stats from '../../components/Dashboard/Stats'

const Account = () => {

    return (
        <section className="w-full min-h-screen flex justify-center items-start">
            <Head>
                <title>Dashboard - Apni Dukaan</title>
            </Head>
            <div className="w-full h-full mt-20">
                <Header />
                <Stats />
            </div>
        </section>
    )
}

export default Account