import React, { useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Header = ({ settings }) => {

    const [name, setName] = useState()
    const [error, setError] = useState(false)
    const { user } = useSelector(state => state.auth)

    return (
        <div className='rounded-lg w-full p-6 lg:p-10'>

            {
                user?.businessName && <>
                    <h1 className='font-bold text-3xl capitalize'>{user.businessName} <span className='text-blue-500'>Store</span></h1>
                    <h3 className='font-semibold text-xl mt-2'>Share more to Earn more</h3>
                    <p className='my-2'>Share your own web store&apos;s link on social media to attarct more customers daily</p>
                    <span className='underline text-xl text-orange-600 cursor-pointer hover:text-orange-400'>
                        <a href={`https://apnidukaan.vercel.app/${user.storeLink}`} target="_blank" rel="noreferrer">apnidukaan.vercel.app/{user.storeLink}</a>
                    </span>
                </>
            }

            {
                !user?.businessName && <>
                    <div className="alert shadow-lg alert-warning mt-4 w-fit">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span className='ml-2'>Please Add your business Details.</span>
                        </div>
                        <div className="flex-none ml-10">
                            <Link href="/account/add">
                                <a className="btn btn-sm">Add</a>
                            </Link>
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default Header