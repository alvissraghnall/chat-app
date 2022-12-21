import React from 'react';
import { BsAppIndicator, BsBoxArrowInRight, BsFilterLeft, BsHouseDoorFill, BsSearch, BsX } from 'react-icons/bs';
import ThemeToggler from "../ThemeToggle";

import Link from 'next/link';
import Image from "next/image";
import logo from "../../assets/maxi.svg";
import Conversation from './Conversation';


const Sidebar = ({ isOpen, changeIsOpen, chats, user, handleSearch }) => {
  return (
    <aside className={`fixed top-0 bottom-0 lg:left-0 p-2 w-72 overflow-y-auto text-center bg-gray-900 ${isOpen ? "" : "-left-72"}`}>
        
        <div className="text-gray-100 text-xl">
            <div className="mt-1 flex justify-between items-center p-2.5">
                <Link href='/'>
                    <div className={`flex gap-x-4 items-center`}>
                        <Image src={logo} alt='' className='pl-2' height={50} width={50} />
                        {/* {open && ( */}
                            <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                                Maxi
                            </span>
                        {/* )} */}
                    </div>
                </Link>
                <ThemeToggler />
                <BsX className='ml-20 cursor-pointer lg:hidden' onClick={changeIsOpen} />
            </div>
            <hr className='my-2 text-gray-600' />
        </div>
        <div className="relative p-2.5 text-white mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700">
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
          
                <BsSearch className='text-sm' />
            </div>
            <input 
                type="text"
                placeholder='Search'
                name="search"
                id={/*className='text-sm ml-4 w-full bg-transparent focus:outline-none' */"search"}
                className="block py-2 pl-10 pr-3 w-full bg-gray-50 text-gray-900 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                onChange={e => handleSearch(e.target.value)}
            />
        </div>
        <div className="p-2.5 text-white mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
            {/* <BsHouseDoorFill className='text-sm' /> */}
            <h2 className="ml-4 text-sm text-gray-200">
                Chats
            </h2>
        </div>

        <div>
            <h2 className="capitalize">conversations</h2>
            { 
                chats.map(chat => (
                    <div key={chat.id}>
                        <Conversation chat={chat} currentUser={user.id} />
                    </div>
                ))
            }
        </div>

        <hr className='my-4 text-gray-600' />

        <div className="p-2.5 text-white mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
            <BsBoxArrowInRight className='text-sm' />
            <span className="ml-4 capitalize text-sm text-gray-200">
                logout
            </span>
        </div>
    </aside>
  )
}

export default Sidebar