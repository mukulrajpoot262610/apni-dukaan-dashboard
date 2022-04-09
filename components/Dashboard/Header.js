import React, { useState } from 'react'
import ContentLoader from 'react-content-loader'

const Header = ({ settings }) => {

    const [name, setName] = useState()
    const [error, setError] = useState(false)

    const handleSubmit = async () => {

        if (name) {
            return setError(true)
        }

        const formData = {
            name,
            logo: 'image'
        }

        try {
            const res = await addSettings(formData);
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='h-fit rounded-lg w-full mt-16 p-6 lg:p-10'>

            {
                settings ? <>
                    <h1 className='font-bold text-3xl capitalize'>{settings.settings.name} <span className='text-blue-500'>Store</span></h1>
                    <h3 className='font-semibold text-xl mt-2'>Share more to Earn more</h3>
                    <p className='my-2'>Share your own web store&apos;s link on social media to attarct more customers daily</p>
                    <span className='underline text-xl text-orange-600 cursor-pointer hover:text-orange-400'>
                        <a>apnidukaan.vercel.app</a>
                    </span>
                </> : <ContentLoader
                    speed={1}
                    width={340}
                    height={84}
                    viewBox="0 0 340 84"
                    backgroundColor="#f6f6ef"
                    foregroundColor="#e8e8e3"
                >
                    <rect x="9" y="4" rx="0" ry="0" width="320" height="22" />
                    <rect x="18" y="14" rx="0" ry="0" width="303" height="6" />
                    <rect x="11" y="33" rx="0" ry="0" width="108" height="13" />
                    <rect x="129" y="33" rx="0" ry="0" width="60" height="13" />
                    <rect x="196" y="33" rx="0" ry="0" width="60" height="13" />
                </ContentLoader>
            }

            {
                !settings && <>
                    <div className="alert shadow-lg alert-warning mt-4 w-fit">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span className='ml-2'>Please Add your business Details.</span>
                        </div>
                        <div className="flex-none ml-10">
                            <a href="#my-modal-2" className="btn btn-sm">Add</a>
                        </div>
                        <div className="modal" id="my-modal-2">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-black">Add Business Detials</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-control w-full mb-2">
                                        <label className="label">
                                            <span className="label-text">Add Business Logo</span>
                                        </label>
                                        <label className="w-28 flex flex-col items-center px-4 py-4 text-blue rounded-lg border border-blue cursor-pointer">
                                            <span className="text-5xl">+</span>
                                            <span className="text-xs">Select a file</span>
                                            <input type='file' className="hidden" />
                                        </label>
                                    </div>
                                    <div className="form-control w-full mb-2">
                                        <label className="label">
                                            <span className="label-text">Business Name</span>
                                        </label>
                                        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Business Name" className="input input-bordered" />
                                        {
                                            error && <label className="label">
                                                <span className="label-text-alt text-red-500">Please enter data</span>
                                            </label>
                                        }
                                    </div>
                                </form>
                                <div className="modal-action">
                                    <a href="#" onClick={handleSubmit} className="btn btn-outline ">Cancel!</a>
                                    <a href="#" onClick={handleSubmit} className="btn">Submit!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default Header