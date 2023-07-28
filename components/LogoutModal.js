import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { HiX } from "react-icons/hi";
import { signOut } from "next-auth/react";;

function LogoutModal ({ isOpen, setIsOpen }) {
  
  return (
    // Use the `Transition` component at the root level
    <Transition show={isOpen} as={Fragment}>
      <Dialog as='div' className="relative z-90" onClose={() => setIsOpen(false)}>
        {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-390"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-280"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500/60 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

                    <Transition.Child
                        as={Fragment}
                        enter="transform ease-out duration-400 sm:duration-500"
                        enterFrom="opacity-0 scale-95 translate-y-full"
                        enterTo="opacity-100 scale-100 translate-y-0"
                        leave="transform ease-in duration-400 sm:duration-500"
                        leaveFrom="opacity-100 scale-100 translate-y-0"
                        leaveTo="opacity-0 scale-95 translate-y-full"
                    >
                        <Dialog.Panel className="pointer-events-auto w-full max-w-md">
                            <div className='flex items-start justify-between p-5'>
                                <Dialog.Title className="text-lg font-semibold text-red-600">
                                    <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                </Dialog.Title>
                                <div class="ml-3 flex h-7 items-center">
                                    <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => setIsOpen(false)}>
                                        <span className="sr-only">Close panel</span>
                                        <HiX className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4 flow-root">
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to logout?</h3>
                                <button type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={signOut}>
                                    Yes, I'm sure
                                </button>
                                <button type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => setIsOpen(false)}>No, continue</button>
            
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>

                </div>
            </div>
        </div>

        {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}

        {/* <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel>
            <Dialog.Title>Deactivate account</Dialog.Title>

            {/* ... 
          </Dialog.Panel>
        </Transition.Child> */}
      </Dialog>
    </Transition>
  )
}

export default LogoutModal;