import Head from 'next/head'
import React, { useState } from 'react'
import UNIT_LIST from '../../public/json/unit.js'

const AddProduct = () => {

    const [name, setName] = useState()
    const [cate, setCate] = useState()
    const [category, setCategory] = useState()
    const [mrp, setMrp] = useState()
    const [discountedPrice, setDiscountedPrice] = useState()
    const [unit, setUnit] = useState(1)
    const [unitUnit, setUnitUnit] = useState('piece')
    const [details, setDetails] = useState()
    const [image, setImage] = useState()

    // const categoryRedux = useSelector(state => state.product.category)

    // console.log(categoryRedux)

    const handleSubmit = (e) => {
        e.preventDefault()

        const payload = {
            name,
            category,
            mrp,
            discountedPrice,
            unit,
            unitUnit,
            details,
        }

        console.log(payload)
    }

    const handleCategorySubmit = async () => {
        try {
            const res = await addProductCategories(cate);
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
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
                            <span className="label-text">Add Product Images (upto 3)</span>
                        </label>
                        <label className="w-28 flex flex-col items-center px-4 py-4 text-blue rounded-lg border border-blue cursor-pointer">
                            <span className="text-5xl">+</span>
                            <span className="text-xs">Select a file</span>
                            <input type='file' className="hidden" />
                        </label>
                        {
                            error.name && <label className="label">
                                <span className="label-text-alt">Please enter data</span>
                            </label>
                        }
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
                            <div className="flex w-full gap-2">
                                <select defaultValue={category} onChange={(e) => setCategory(e.target.value)} className="select select-bordered w-10/12 lg:w-11/12">
                                    <option>Choose Category</option>
                                    {/* {
                                        categoryRedux.map((e, i) => <option key={i}>{e}</option>)
                                    } */}
                                </select>
                                <a href="#my-modal-2" className="btn">+</a>
                                <div className="modal" id="my-modal-2">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Category Name</span>
                                            </label>
                                            <input type="text" onChange={(e) => setCate(e.target.value)} placeholder="Category Name" className="input input-bordered" required />
                                        </div>
                                        <div className="modal-action">
                                            <a href="#" onClick={handleCategorySubmit} className="btn">Submit!</a>
                                        </div>
                                    </div>
                                </div>
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