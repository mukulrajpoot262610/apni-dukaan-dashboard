import React from 'react'
import Navbar from './Navbar'
import { useRouter } from 'next/router'
import Head from 'next/head'
import LeftSideBar from './LeftSideBar'
import { Toaster } from 'react-hot-toast';
import Loader from '../Loader'
import { useLoadingWithRefresh } from '../../hooks/useLoadingWithRefresh'

const Layout = ({ children }) => {

    const router = useRouter()
    const { loading } = useLoadingWithRefresh()

    return (
        loading ? <Loader /> :
            <>
                {
                    (router.pathname !== '/login') && <Navbar />
                }
                <main className='w-full flex justify-center items-center flex-col'>
                    <Head>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                    </Head>
                    <Toaster />
                    <div className='flex w-full'>
                        {
                            router.pathname !== '/login' && router.pathname !== '/' && <div className='hidden lg:block w-2/12'>
                                <LeftSideBar />
                            </div>
                        }
                        {
                            router.pathname !== '/login' ? <div className='w-full lg:w-10/12'>{children}</div> : <div className='w-full'>{children}</div>
                        }

                    </div>
                </main>
            </>
    )
}

export default Layout