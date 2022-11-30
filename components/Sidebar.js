import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Link from "next/link";
import logo from "../assets/maxi.svg";
import Image from "next/image";

import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiFillPieChart } from 'react-icons/ai'
import { SiFuturelearn } from 'react-icons/si'
import { SiOpenaccess } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg'
// import Logo from '../assets/images/logo.svg'

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const Menus = [
        { title: 'Dashboard', path: '/dashboard', src: <AiFillPieChart /> },
        { title: 'Course', path: '/course', src: <SiFuturelearn /> },
        { title: 'Profile', path: '/profile', src: <CgProfile /> },
        { title: 'Signin', path: '/login', src: <SiOpenaccess />, gap: 'true' },
    ]

    return (
        <>
            <div
                className={`${
                    open ? 'w-60' : 'w-fit'
                } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
            >
                <BsArrowLeftCircle
                    className={`${
                        !open && 'rotate-180'
                    } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
                    onClick={() => setOpen(!open)}
                />
                <Link href='/'>
                    <div className={`flex ${open && 'gap-x-4'} items-center`}>
                        <Image src={logo} alt='' className='pl-2' height={50} width={50} />
                        {open && (
                            <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                                Maxi
                            </span>
                        )}
                    </div>
                </Link>

                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link href={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                                    router.pathname === menu.path &&
                                    'bg-gray-200 dark:bg-gray-700'
                                }`}
                            >
                                <span className='text-4xl'>{menu.src}</span>
                                <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar