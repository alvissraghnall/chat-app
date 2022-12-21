import React, { useState } from 'react'
import { BsFilterLeft } from 'react-icons/bs'

const DrawerButton = ({ isOpen, changeIsOpen }) => {
  return (
    <span className='absolute text-white text-4xl top-5 left-4 cursor-pointer'>
        <span onClick={changeIsOpen}>
            <BsFilterLeft className='px-2 bg-gray-900 rounded-md' />
        </span>
    </span>
  )
}

export default DrawerButton