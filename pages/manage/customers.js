import React, { useState, useEffect } from 'react'
import UserTable from '../../components/Table/UserTable'
import Head from 'next/head'
import { GetAllUsers } from '../../services/apiClient';

const Customers = () => {

    const [usersState, setUsersState] = useState();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const { data } = await GetAllUsers();
                setUsersState(data.users)
            } catch (err) {
                console.log(err)
            }

        }
        fetchData()
    }, [])

    return (
        <section className="text-gray-600 body-font p-4 lg:p-10 relative">
            <Head>
                <title>Customers - ApniDukaan</title>
            </Head>

            <div className='w-full mt-12 flex justify-between flex-col gap-5 lg:flex-row'>
                <h1 className='font-bold text-xl'>Your Customers</h1>
            </div>

            <main className="flex flex-col justify-center items-center mt-12">

                <UserTable users={usersState} setUsersState={setUsersState} />
            </main>

        </section>
    )
}

export default Customers