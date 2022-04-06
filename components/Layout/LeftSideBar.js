import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../services/apiClient'
import { setAuth } from '../../redux/authSlice'
import { useRouter } from 'next/router'

const LeftSideBar = () => {

    const router = useRouter()
    const dispatch = useDispatch()

    const handleLogout = async () => {
        try {
            const { data } = await logout()
            dispatch(setAuth(data))
            toast.success('Logout Successfull')
            router.replace('/')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='fixed z-50 h-full w-2/12 bg-black flex justify-start items-center flex-col'>
            <div className="mt-12">
                <Image src='/logo-white.svg' height={100} width={100} alt="" objectFit="contain" />
                <h1 className="font-bold text-white">Apni Dukaan</h1>
            </div>

            <ul className="menu w-full mt-8 p-3 text-white rounded-box bg-black">
                <li className="menu-title">
                    <span className='!text-gray-500'>Menu</span>
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
                    <Link href="/products" passHref>
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
        </div>
    )
}

export default LeftSideBar