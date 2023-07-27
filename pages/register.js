import { emailValidator, usernameValidator } from "../util/form/validators";
import { useState } from "react";

const Register = () => {

    const [email, setEmail] = useState({
        value: "",
        touched: false,
        message: ""
    })
    const [name, setName] = useState({
        value: "",
        touched: false,
        message: ""
    })

    // const setEmailValue = val => {

    // }

    const handleSubmit = (ev) => {
        ev.preventDefault();

    }

    return (
        <div className={`p-4 mx-auto my-16 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 font-poppins`}>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <h5 className="text-xl center text-center font-semibold text-gray-900 dark:text-white">Sign in to Maxi</h5>

                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="mail@domain.ext"
                        onBlur={ev => setEmail({
                            ...email,
                            message: emailValidator(email.value),
                        })}
                        value={email.value}
                        onChange={ev => setEmail({
                            ...email,
                            value: ev.currentTarget.value,
                        })}
                        onFocus={ev => setEmail({
                            ...email,
                            touched: true,
                        })}
                    />
                    {email.touched && emailValidator(email.value) && <div className="text-red-600 my-1 text-sm pl-1">
                        {email.message}
                    </div>}
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="Name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Dan Joe"
                        onBlur={() => setName({
                            ...name,
                            message: usernameValidator(name.value),
                        })}
                        value={name.value}
                        onChange={ev => setName({
                            ...name,
                            value: ev.currentTarget.value,
                        })}
                        onFocus={ev => {
                            setName({
                                ...name,
                                touched: true,
                            }); console.log(name)
                        }}
                    />
                    {name.touched && usernameValidator(name.value) && <div className="text-red-600 my-1 text-sm pl-1">
                        {name.message}
                    </div>}
                </div>

                <button
                    type="submit"
                    className="w-full font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Sign Up
                </button>

                <div
                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                    <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <div className="mt-8 grid space-y-4">
                    <button
                        className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    >
                        <div className="relative flex items-center space-x-4 justify-center">
                            <img
                                src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                                className="absolute left-0 w-5"
                                alt="google logo"
                            />
                            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                                Continue with Google
                            </span>
                        </div>
                    </button>
                    <button
                        className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    >
                        <div className="relative flex items-center space-x-4 justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="absolute left-0 w-5 text-gray-700"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                                Continue with Github
                            </span>
                        </div>
                    </button>
                    <button
                        className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                               hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    >
                        <div className="relative flex items-center space-x-4 justify-center">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                                className="absolute left-0 w-5"
                                alt="Facebook logo"
                            />
                            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                                Continue with Facebook
                            </span>
                        </div>
                    </button>
                </div>

            </form >
        </div >
    );
}

export default Register;