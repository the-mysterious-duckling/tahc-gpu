import React from 'react';
import bgImg from '../../assets/images/ezgi.gif'

const BusinessSummary = () => {
    return (
        <div className='my-32'
            style={{
                background: `url(${bgImg})`
            }}>
            <div className="hero my-10" >
                <div className=" bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-neutral">Wholesale</h1>
                        <p className="mb-5 text-xl text-gray-800">We served 200+ customers</p>
                        <p className="mb-5 text-gray-800">We have 20 users</p>
                        <p className="mb-5 text-gray-800">120M+ Annual revenue </p>
                        <p className="mb-5 text-gray-800">MIT licensed </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className="stats shadow-2xl">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Likes</div>
                        <div className="stat-value text-primary">5.6K</div>
                        <div className="stat-desc">4% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">Half Million</div>
                        <div className="stat-desc">20% more than last month</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="https://api.lorem.space/image/face?w=128&h=128" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Tasks done</div>
                        <div className="stat-desc text-secondary">31 tasks remaining</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;