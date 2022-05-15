import Head from 'next/head'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import UNIT_LIST from '../../public/json/unit.js'
import { AddCategory, AddProductData } from '../../services/apiClient.js'
import { setAuth } from '../../redux/authSlice'
import { useRouter } from 'next/router'

const AddProduct = () => {

    const [name, setName] = useState()
    const [cate, setCate] = useState()
    const [category, setCategory] = useState()
    const [categoryField, setCategoryField] = useState()
    const [mrp, setMrp] = useState()
    const [discountedPrice, setDiscountedPrice] = useState()
    const [unit, setUnit] = useState(1)
    const [unitUnit, setUnitUnit] = useState('piece')
    const [details, setDetails] = useState()
    const [image, setImage] = useState()
    const [url, setUrl] = useState()
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const router = useRouter()
    const { user } = useSelector(state => state.auth)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            name,
            image: url,
            category,
            mrp,
            discountedPrice,
            unit,
            unitUnit,
            details,
        }

        try {
            const { data } = await AddProductData(payload)
            toast.success('Product Added Successfully')
            router.push('/products')
        } catch (err) {
            console.log(err)
        }
    }

    const handleAddCategory = async () => {
        if (!categoryField) {
            return toast.error('Add a valid category name')
        }

        try {
            const { data } = await AddCategory({ category: categoryField })
            dispatch(setAuth(data))
            toast.success('Category Added Successfully')
        } catch (err) {
            console.log(err)
            toast.error('Error Occured')
        }
    }

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


    const [error, setError] = useState({
        name: false
    })

    return (
        <section className="p-4 lg:p-10">
            <Head>
                <title>Add Product</title>
            </Head>

            <div className='w-full my-12'>

                <h1 className='text-3xl font-bold mb-8'>Add Product</h1>

                <form onSubmit={handleSubmit}>

                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Add Product Image</span>
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

                    <div className='flex gap-6 mb-2 flex-col lg:flex-row'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" className="input input-bordered" />
                            {
                                error.name && <label className="label">
                                    <span className="label-text-alt">Please enter data</span>
                                </label>
                            }
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Category</span>
                            </label>
                            <div className="flex justify-between flex-col lg:flex-row gap-2">
                                <select defaultValue={category} onChange={(e) => setCategory(e.target.value)} className="select flex-1 select-bordered">
                                    <option>Choose Category</option>
                                    {
                                        user?.category?.map((e, i) => <option key={i}>{e}</option>)
                                    }
                                </select>
                                <input type="text" onChange={(e) => setCategoryField(e.target.value)} placeholder="Category Name" className="input input-bordered" />
                                <button className="btn" onClick={handleAddCategory}>+</button>

                                {

                                }
                            </div>
                            {
                                error.name && <label className="label">
                                    <span className="label-text-alt">Please enter data</span>
                                </label>
                            }
                        </div>
                    </div>

                    <div className='flex gap-6 mb-2 flex-col lg:flex-row'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">MRP</span>
                            </label>
                            <input value={mrp} onChange={(e) => setMrp(e.target.value)} type="number" min={1} placeholder="MRP" className="input input-bordered" />
                            {
                                error.name && <label className="label">
                                    <span className="label-text-alt">Please enter data</span>
                                </label>
                            }
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Discounted Price</span>
                            </label>
                            <input value={discountedPrice} onChange={(e) => setDiscountedPrice(e.target.value)} type="number" min={1} placeholder="Discounted Price" className="input input-bordered" />
                            {
                                error.name && <label className="label">
                                    <span className="label-text-alt">Please enter data</span>
                                </label>
                            }
                        </div>
                    </div>

                    <div className='flex gap-6 mb-2 flex-col lg:flex-row'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Unit</span>
                            </label>
                            <div className="flex space-x-2">
                                <input value={unit} onChange={(e) => setUnit(e.target.value)} type="number" min={1} placeholder="Product Unit" className="input input-bordered w-full" />
                                <select defaultValue={unitUnit} onChange={(e) => setUnitUnit(e.target.value)} className="select select-bordered w-32">
                                    {
                                        UNIT_LIST.map((e, i) => <option key={i}>{e}</option>)
                                    }
                                </select>
                            </div>
                            {
                                error.name ? <label className="label">
                                    <span className="label-text-alt">Please enter data</span>
                                </label> : <label className="label">
                                    <span className="label-text-alt font-bold">Unit: Per {unit} {unitUnit}</span>
                                </label>
                            }
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Details</span>
                            </label>
                            <input value={details} onChange={(e) => setDetails(e.target.value)} type="text" placeholder="Product Details" className="input input-bordered" />
                            {
                                error.name && <label className="label">
                                    <span className="label-text-alt">Please enter data</span>
                                </label>
                            }
                        </div>
                    </div>

                    <button type='submit' className='btn btn-wide my-6'>Submit</button>

                </form>
            </div>
        </section>
    )
}

export default AddProduct