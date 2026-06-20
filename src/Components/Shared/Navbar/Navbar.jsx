'use client'
import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { authClient } from "@/lib/auth-client"
const Navbar = () => {

    const clearSession = async () => {
        await authClient.signOut();

    }



    const { data: session } = authClient.useSession();

    const user = session?.user;
    console.log(user)

    return (
        <div className="navbar bg-[#2a3c50] text-white shadow-sm px-7 container mx-auto  mt-1 rounded-full ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='hover:text-green-300'>
                            <a>All Tiles</a>
                            <ul className="p-2">
                                <li className='hover:text-green-300 text-black'><a>Premium Tiles</a></li>
                                <li className='hover:text-green-300 text-black'><a>Flagship Tile</a></li>
                            </ul>
                        </li>
                        <li className='hover:text-green-300'><a>My Profile</a></li>
                    </ul>
                </div>
                <div className='h-full flex items-center justify-center gap-2 text-xl font-bold'>
                    <Image
                        src={logo}
                        alt="Tiles Gallery"
                        width={60}
                        height={50}
                    />
                    <h1>Tiles Gallery</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/alltiles">All Tiles</Link>
                    </li>
                    <li className='hover:text-green-300'><a>My Profile</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {user ? (

                    <div className='flex gap-2 justify-center items-center'>
                        <p>Welcome,{user.name}</p>
                        <button className="btn btn-accent text-white" onClick={() => clearSession()}>Log Out</button>
                    </div>

                ) : (
                    <Link href="/login" className="btn btn-accent text-white">Log In</Link>
                )}

            </div>
        </div >
    );
};

export default Navbar;