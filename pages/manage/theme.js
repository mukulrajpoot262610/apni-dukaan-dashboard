import React, { useState } from 'react'
import Head from 'next/head'
import toast from 'react-hot-toast'
import { UpdateThemeDetails } from '../../services/apiClient'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Theme = () => {

    const { user } = useSelector(state => state.auth)
    console.log(user)
    const router = useRouter()
    const [image, setImage] = useState()
    const [url, setUrl] = useState(user.banner)
    const [loading, setLoading] = useState(false)
    const [storeDesc, setStoreDesc] = useState(user.description)
    const [emailSupport, setEmailSupport] = useState(user.supportEmail)
    const [phoneSupport, setPhoneSupport] = useState(user.supportPhone)
    const [deliveryCharges, setDeliveryCharges] = useState(user.deliveryCharges)
    const [deliveryTiming, setDeliveryTiming] = useState(user.deliveryTiming)

    const uploadImage = () => {

        if (!image) {
            return toast.error('Please add a Image')
        }

        setLoading(true)
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', "udfbcx15")
        data.append('cloud_name', 'mukulrajpoot')

        fetch("https://api.cloudinary.com/v1_1/mukulrajpoot/image/upload", {
            method: 'POST',
            body: data
        }).then(response => response.json())
            .then(data => {
                setUrl(data.url)
                setLoading(false)
            }).catch(err => console.log(err))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = { storeDesc, emailSupport, phoneSupport, deliveryCharges, deliveryTiming, image: url }

        try {
            const { data } = await UpdateThemeDetails(payload)
            toast.success('Updated Successfully')
            router.push('/')
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <section className="text-gray-600 body-font p-4 lg:p-10 relative">
            <Head>
                <title>Theme Customization - ApniDukaan</title>
            </Head>

            <div className='w-full mt-12 flex justify-between flex-col gap-5 lg:flex-row'>
                <h1 className='font-bold text-xl'>Your Store</h1>
            </div>

            <main className="flex flex-col justify-center items-center mt-12">

                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span className="label-text">Add Store Banner</span>
                    </label>
                    <label className="w-full lg:w-1/2 h-40 flex flex-col items-center justify-center text-blue rounded-lg border overflow-hidden border-blue cursor-pointer">
                        {
                            url ? <img src={url} alt="" className='object-cover h-36' /> : <><span className="text-5xl">+</span>
                                <span className="text-xs">Select a file</span></>
                        }
                        <input type='file' onChange={(e) => setImage(e.target.files[0])} className="hidden" />
                    </label>
                    <div onClick={uploadImage} className={`${loading ? "loading" : ""} btn btn-sm w-fit mt-2 `}>
                        Upload
                    </div>
                </div>

                <div className='w-full flex lg:flex-row flex-col gap-4'>
                    <div className="form-control w-full  lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Store Details</span>
                        </label>
                        <textarea value={storeDesc} onChange={(e) => setStoreDesc(e.target.value)} type="text" placeholder="Store Details" className="textarea textarea-bordered h-36" required />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buyer Email Support</span>
                            </label>
                            <input value={emailSupport} onChange={(e) => setEmailSupport(e.target.value)} type="text" placeholder="Buyer Email Support" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-3">
                            <label className="label">
                                <span className="label-text">Buyer Phone Support</span>
                            </label>
                            <input value={phoneSupport} onChange={(e) => setPhoneSupport(e.target.value)} type="text" placeholder="Buyer Phone Support" className="input input-bordered" required />
                        </div>
                    </div>
                </div>

                <div className='flex lg:flex-row flex-col w-full gap-4 mt-6'>
                    <div className="form-control w-full lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Delivery Charges</span>
                        </label>
                        <input value={deliveryCharges} onChange={(e) => setDeliveryCharges(e.target.value)} type="text" placeholder="Delivery Charges" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Delivery Timings (max) </span>
                        </label>
                        <input value={deliveryTiming} onChange={(e) => setDeliveryTiming(e.target.value)} type="text" placeholder="Delivery Timings" className="input input-bordered" required />
                    </div>

                </div>


            </main>

            <button onClick={handleSubmit} className={`${loading ? "loading" : ""} btn btn-wide my-6 mb-24`}>
                Save
            </button>

        </section>
    )
}

export default Theme