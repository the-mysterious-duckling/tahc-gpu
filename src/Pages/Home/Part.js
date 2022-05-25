import React from 'react';

const Part = ({ part }) => {
    const { name, price, img } = part
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <img width={500} height={500} src={img} alt="gpu" />
                <h2 className="card-title text-secondary">{name}</h2>
                <p className='text-center'>Price: ${price}</p>
                <div className="card-actions justify-center mt-2">
                    <button className='btn btn-primary text-violet-300 font-bold bg-gradient-to-r from-neutral to-accent'>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;