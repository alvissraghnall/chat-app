import axios from "axios";
import { allValidate, emailValidator, usernameValidator } from "../util/form/validators";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs";
import { generateAvatars } from "../services/gen-rnd-avatar.service";
import GoogleLogo from "../components/GoogleLogo";
import { registerUser } from "../services";
import { toast } from "react-toastify";
import Image from "next/image";

const Register = () => {
    //TODO: Add React Toastify !
    const navigate = useRouter();

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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [avatars, setAvatars] = useState([]);
    const [pickedAvatar, setPickedAvatar] = useState(null);

    useEffect(() => setAvatars(generateAvatars), []);

    const refreshAvatars = () => setAvatars(generateAvatars);
    const chooseAvatar = ev => setPickedAvatar(ev.currentTarget.src);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setIsSubmitting(true);
        const data = {
            name: name.value,
            email: email.value,
            image: pickedAvatar
        };

        registerUser(data)
            .then(
                res => {
                    if(res.status === 201) {
                        toast.success("Registration successful!", {
                            delay: 50,
                        });
                        setTimeout(
                            () => navigate.push("/login"),
                            5150
                        );
                    }
                }
            )
            .catch(
                err => {
                    toast.error(err.message, {
                        delay: 50,
                    });
                }
            )
            .finally(() => setIsSubmitting(false));
        console.log(":pes");
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
                
                <div className="relative mt-3 mx-auto ml-1">
                    <p className="font-mono text-zinc-900/40 text-sm font-normal block mb-1.5">Pick an avatar:</p>
                    <div className="flex flex-wrap gap-2">
                        {
                            avatars.map((av, idx) => (
                                <div key={idx + "-" + av} className="relative cursor-pointer">
                                    <img 
                                        src={av} 
                                        alt="" 
                                        className={`rounded-full h-11 w-11 hover:opacity-40 hover:bg-slate-600 ease-in duration-150 transition-all ${av === pickedAvatar && 'bg-slate-300 opacity-20'}`} 
                                        onClick={chooseAvatar} 
                                    />
                                    {
                                        av === pickedAvatar && (
                                            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>                    
                                            </div>
                                        )
                                    }
                                </div>
                            ))       
                        }
                    </div>

                    <div className="flex place-content-center mt-3 cursor-pointer rounded-full w-max mx-auto" onClick={refreshAvatars}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full font-semibold text-white bg-blue-700 disabled:bg-blue-700/60 disabled:cursor-not-allowed hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    disabled={!allValidate({
                        name: name.value,
                        email: email.value,
                    })}
                >
                    {!isSubmitting
                    ? "Sign Up"
                    : <>
                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                        </svg>
                        <span className="leading-3 text-base">Loading...</span>
                    </>
                    }
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
                            <GoogleLogo
                                className="absolute left-0 w-5 h-5"
                                clazzes="w-5 h-5"
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
                            {/* <img
                                src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                                className="absolute left-0 w-5"
                                alt="Facebook logo"
                            /> */}
                            <BsFacebook 
                                className="absolute text-blue-700 left-0 w-5 h-5"
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