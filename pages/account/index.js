import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Dashboard/Header'
import Stats from '../../components/Dashboard/Stats'
import { GetStats } from '../../services/apiClient'

const Account = () => {

    const [stats, setStats] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await GetStats()
                setStats(data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])

    return (
        <section className="w-full min-h-screen flex justify-center items-start">
            <Head>
                <title>Dashboard - Apni Dukaan</title>
            </Head>
            <div className="w-full h-full mt-20">
                <Header />
                {
                    stats && <Stats stats={stats} />
                }
            </div>
        </section>
    )
}

export default Account