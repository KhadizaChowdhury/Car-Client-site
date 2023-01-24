import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h3 className="text-xl font-bold pb-5">Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;