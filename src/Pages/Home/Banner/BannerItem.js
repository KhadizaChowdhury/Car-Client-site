import React from 'react';

const BannerItem = ({ sliderItem }) => {
    const { id, image, prev, next } = sliderItem;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full" />
            </div>
            <div className="absolute text-white transform -translate-y-2/3 md:-translate-y-1/2 left-12 lg:left-24 top-1/2 w-4/5 md:w-3/5 lg:w-2/5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Affordable
                    <br />Price For Car
                    Servicing</h1>
                <br />
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <br />
                <button className="btn btn-active btn-theme mr-5">Button</button>
                <button className="btn btn-outline btn-theme">Button</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`}><button className="btn btn-outline btn-circle btn-theme mr-5">❮</button></a>
                <a href={`#slide${next}`}><button className="btn btn-outline btn-circle btn-theme">❯</button></a>
            </div>
        </div>
    );
};

export default BannerItem;