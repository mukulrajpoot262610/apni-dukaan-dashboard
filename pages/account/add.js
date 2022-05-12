import { data } from 'autoprefixer'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../redux/authSlice'
import { UpdateBusinessDetails } from '../../services/apiClient'
import { useRouter } from 'next/router'

const Add = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const [name, setName] = useState()
    const [businessName, setBusinessName] = useState()
    const [error, setError] = useState(false)
    const [image, setImage] = useState()
    const [url, setUrl] = useState()
    const [loading, setLoading] = useState(false)

    const uploadImage = () => {

        if (!image) {
            return toast.error('Please add a Logo')
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

        if (!businessName) {
            return toast.error('Please add a valid Business name')
        }

        if (!name) {
            return toast.error('Please add a valid name')
        }

        const formData = {
            name,
            businessName,
            logo: url
        }

        try {
            const res = await UpdateBusinessDetails(formData);
            dispatch(setAuth(res.data))
            toast.success('Updated Successfully')
            router.push('/account')
        } catch (err) {
            console.log(err)
            toast.error('Error Occured')
        }
    }

    return (
        <div className="p-10 mt-10">

            <h1 className='text-4xl font-bold mb-4'>Add Your Business Details</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span className="label-text">Add Business Logo</span>
                    </label>
                    <label className="w-28 flex flex-col items-center px-4 py-4 text-blue rounded-lg border border-blue cursor-pointer">
                        {
                            url ? <img src={url} alt="" /> : <><span className="text-5xl">+</span>
                                <span className="text-xs">Select a file</span></>
                        }
                        <input type='file' onChange={(e) => setImage(e.target.files[0])} className="hidden" />
                    </label>
                    <button onClick={uploadImage} className={`${loading ? "loading" : ""} btn btn-sm w-fit mt-2 `}>
                        Upload
                    </button>
                </div>
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span className="label-text">Business Name</span>
                    </label>
                    <input type="text" onChange={(e) => setBusinessName(e.target.value)} placeholder="Business Name" className={`input input-bordered ${error ? "input-error" : ""}`} />
                    {
                        error && <label className="label">
                            <span className="label-text-alt text-red-500">Please enter data</span>
                        </label>
                    }
                </div>
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span className="label-text">Shopkeeper Name</span>
                    </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Shopkeeper Name" className={`input input-bordered ${error ? "input-error" : ""}`} />
                    {
                        error && <label className="label">
                            <span className="label-text-alt text-red-500">Please enter data</span>
                        </label>
                    }
                </div>
                <div className="modal-action">
                    <button onClick={handleSubmit} className="btn">Submit!</button>
                </div>
            </form>
        </div>
    )
}

export default Add