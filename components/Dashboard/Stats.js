import React from 'react'

const Stats = () => {
    return (
        <div className='w-full  p-6 lg:p-10 mb-10'>

            <div className='flex justify-between items-center my-4'>
                <h2>Overview</h2>
                <h2>LifeTime <i className='fa-solid fa-caret-down'></i></h2>
            </div>
            <div className="w-full shadow stats flex flex-col lg:flex-row">
                <div className="stat">
                    <div className="stat-figure text-3xl">
                        <i className="fa-solid fa-download"></i>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">0</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-3xl">
                        <i className="fa-solid fa-clipboard-check"></i>
                    </div>
                    <div className="stat-title">Total Sales</div>
                    <div className="stat-value">0</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-3xl">
                        <i className="fa-solid fa-binoculars"></i>
                    </div>
                    <div className="stat-title">Store Views</div>
                    <div className="stat-value">0</div>
                </div>
            </div>

        </div>
    )
}

export default Stats