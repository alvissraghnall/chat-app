import { Disclosure } from '@headlessui/react';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import logo from "../../assets/maxi.svg";
import {
    GiHamburgerMenu
} from 'react-icons/gi';
import {
    MdOutlineLogout
} from "react-icons/md";
import Toggle from "../ThemeToggle";
import Logout from "./user/Logout";

const Sidebar = () => {
    const [modal, setModal] = useState(false);
  return (
    <div className='flex-1 bg-[#3e3c61]'> 
        {/* const [isOpen, setIsOpen] = useState(false); */}
        
        {modal && <Logout modal={modal} setModal={setModal} />}
        
    </div>
  )
}

export default Sidebar