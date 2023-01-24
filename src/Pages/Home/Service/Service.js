import React from 'react';

const Service = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div>
            <div className="card card-compact w-89 bg-base-100 p-6 shadow-xl">
                <figure><img src={img} alt={`image_of_${title}`} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between">
                        <span>{price}</span>
                        <button className="btn btn-sm btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;