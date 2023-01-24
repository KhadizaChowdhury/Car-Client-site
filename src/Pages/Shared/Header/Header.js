import React from 'react';
import logo from '../../../assets/logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar bg-base-100 py-5 lg:py-10 h-20 md:h-36">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Contact</a></li>
                    </ul>
                </div>
                <img src={logo} alt="Logo" className='visible md:invisible lg:visible w-16 lg:w-24'/>
            </div>
            <img src={logo} alt="Logo" className='invisible md:visible lg:invisible w-16 md:w-20'/>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle mr-1 md:mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-outline btn-theme-outline">Appointment</button>
            </div>
        </div>
    );
};

export default Header;