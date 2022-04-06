import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }

    const handleLogout = (e) => {
        e.preventDefault()
    }

    return (
        <nav className='w-full fixed z-40 top-0 right-0 pr-10 h-16 bg-white flex justify-end items-center'>
            <div className='flex items-center relative'>
                <h1 className="font-bold cursor-pointer" onClick={handleMenu}>Welcome, <i className="fa-solid fa-caret-down ml-2"></i></h1>

                {
                    menu && <ul className="absolute top-10 right-0 menu w-64 p-3 border bg-base-100 rounded-box shadow-md">
                        <li className="menu-title">
                            <span>Menu</span>
                        </li>
                        <li>
                            <Link href="/dashboard" passHref>
                                <a className='flex justify-between'>
                                    Home
                                    <i className="fa-solid fa-house"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard" passHref>
                                <a className='flex justify-between'>
                                    Orders
                                    <i className="fa-solid fa-clipboard"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard" passHref>
                                <a className='flex justify-between'>
                                    Products
                                    <i className="fa-solid fa-boxes-stacked"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard" passHref>
                                <a className='flex justify-between'>
                                    Manage
                                    <i className="fa-solid fa-list-check"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard" passHref>
                                <a className='flex justify-between'>
                                    Accounts
                                    <i className="fa-solid fa-user"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <a className='flex justify-between' onClick={handleLogout}>
                                Logout
                                <i className="fa-solid fa-power-off"></i>
                            </a>
                        </li>
                    </ul>
                }

                <div className='fixed left-0 w-full lg:hidden bottom-0 py-3 flex justify-evenly bg-white'>
                    <Link href="/dashboard" passHref>
                        <div className='flex flex-col justify-center items-center cursor-pointer hover:text-black text-gray-500'>
                            <i className="fa-solid fa-home text-2xl"></i>
                            <h1 className='text-sm font-bold'>Home</h1>
                        </div>
                    </Link>
                    <Link href="/search" passHref>
                        <div className='flex flex-col justify-center items-center cursor-pointer hover:text-black text-gray-500'>
                            <i className="fa-solid fa-clipboard text-2xl"></i>
                            <h1 className='text-sm font-bold'>Orders</h1>
                        </div>
                    </Link>
                    <Link href="/products" passHref>
                        <div className='flex flex-col justify-center items-center cursor-pointer hover:text-black text-gray-500'>
                            <i className="fa-solid fa-box text-2xl"></i>
                            <h1 className='text-sm font-bold'>Products</h1>
                        </div>
                    </Link>
                    <Link href="/bag" passHref>
                        <div className='flex flex-col justify-center items-center cursor-pointer hover:text-black text-gray-500'>
                            <i className="fa-solid fa-list-check text-2xl"></i>
                            <h1 className='text-sm font-bold'>Manage</h1>
                        </div>
                    </Link>
                    <div className='flex flex-col justify-center items-center cursor-pointer hover:text-black text-gray-500'>
                        <i className="fa-solid fa-user text-2xl"></i>
                        <h1 className='text-sm font-bold'>Account</h1>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar