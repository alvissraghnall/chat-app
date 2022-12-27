import React from 'react'
import Image from "next/image";
import logo from "../assets/maxi.svg";

const Logo = () => {
    return (
        <nav className='border-gray-200 px-2 py-2.5 rounded dark:bg-gray-800'>
            <div className='flex items-center'>
                <Image src={logo} className='h-7 mr-3 ' alt='Maxi logo' height={50} width={50} />
                <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                    Maxi
                </span>
            </div>
        </nav>
    )
}

export default Logo