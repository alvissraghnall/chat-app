import React from 'react'
import Image from "next/image";

const Logo = () => {
    return (
        <nav className='border-gray-200 px-2 py-2.5 rounded dark:bg-gray-800'>
                <div className='flex items-center'>
                    <Image src="assets/maxi.svg" className='h-7 mr-3 ' alt='Maxi logo' />
                    <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                        Maxi
                    </span>
                </div>

        </nav>
    )
}

export default Logo