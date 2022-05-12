import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { SendOtp, VerifyOtp } from '../services/apiClient'
import { setAuth } from '../redux/authSlice'

const Login = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const [email, setEmail] = useState()
    const [error, setError] = useState(false)
    const [showOtp, setShowOtp] = useState(false)
    const [otp, setOtp] = useState()
    const [response, setResponse] = useState()

    const redirect = router.query.redirect

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!otp) {
            try {
                const { data } = await SendOtp({ email })
                setShowOtp(true)
                setResponse(data)

                toast.custom((t) => (
                    <div
                        className={`${t.visible ? 'animate-enter' : 'animate-leave'
                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 pt-0.5">
                                    <Image src="/logo.svg" height={50} width={80} alt='' className='cursor-pointer' />
                                </div>
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                        Apni Dukaan
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Your OTP for login is <span className='text-xl text-red-500 font-black'>{data.otp}</span>!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-l border-gray-200">
                            <button
                                onClick={() => toast.dismiss(t.id)}
                                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium  hover:text-indigo-500 focus:outline-none focus:ring-2"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                ))

            } catch (err) {
                console.log(err)
                toast.error(err.response?.data?.msg)
            }
        } else {
            try {
                const { data } = await VerifyOtp({ ...response, otp })
                dispatch(setAuth(data))
                toast.success('Login Successfull')
                redirect ? router.replace(`/${redirect}`) : router.replace('/account')
            } catch (err) {
                console.log(err)
                toast.error(err.response?.data?.msg)
                if (err.response?.data?.msg === 'OTP Expired') {
                    setOtp(undefined)
                    setShowOtp(false)
                }
            }
        }
    }



    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Head>
                <title>Apni_dukaan - IN</title>
            </Head>

            <main className="h-screen min-h-screen w-full flex flex-col lg:flex-row lg:p-6">

                <section className="w-full lg:w-1/3 h-full flex flex-col justify-center items-start p-10 relative">
                    <div className="mt-4 absolute top-0 flex items-end">
                        <Image src='/logo.svg' height={30} width={30} alt="" objectFit="contain" />
                        <h1 className="font-bold">Apni Dukaan</h1>
                    </div>
                    <div className="lg:w-10/12 w-full mt-10">
                        <h1 className="text-3xl font-bold">Ready to evolve your business?</h1>

                        <p className="mt-2 mb-6">Continue to access your store data</p>

                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className={`input input-bordered ${error ? "input-error" : ""}`} onChange={(e) => {
                                    setOtp(undefined)
                                    setShowOtp(false)
                                    setEmail(e.target.value)
                                }} required />
                                {
                                    error && <label className="label">
                                        <span className="label-text-alt text-red-500">Please enter Email</span>
                                    </label>
                                }

                            </div>

                            {
                                showOtp && <input type='text' onChange={(e) => setOtp(e.target.value)} className={`input input-bordered w-full mt-4 ${error ? "input-error" : ""}`} placeholder="Type OTP Here" required />
                            }

                            <div className="form-control">
                                <button className="btn mt-4">Continue</button>
                            </div>
                        </form>

                    </div>
                </section>

                <section className="w-full lg:w-2/3 h-full relative">
                    <Image src='/banner.png' layout="fill" alt="" objectFit="cover" />
                </section>
            </main>

        </div>
    )
}

export default Login