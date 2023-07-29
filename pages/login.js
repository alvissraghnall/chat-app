import { useState } from "react";
import styles from "../styles/Register.module.css";
import { signIn, getProviders } from "next-auth/react";
import { toast } from "react-toastify";

const Login = () => {

    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = ev => {
        ev.preventDefault();
        setIsSubmitting(true);

        signIn("email",
            { callbackUrl: "/chat", email }
        )
        .catch(err => {
            console.log(err);
            toast.error(err.message);
        })
        .finally(() => setIsSubmitting(false));
    }

    const handleGoogle = ev => {
        signIn("google", { callbackUrl: "/chat", })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
            })
            .finally(() => setIsSubmitting(false));
    }

    const handleGithub = ev => {
        signIn("github", {
            callbackUrl: "/chat"
        })
            .finally(() => setIsSubmitting(false));
    }

    return (
        <div className={`p-4 mx-auto my-16 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700`}>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <h5 className="text-xl center text-center font-semibold text-gray-900 dark:text-white">Sign in to Maxi</h5>
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@mail.com"
                        required
                    />
                </div>
                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                
                            />
                        </div>
                        <label
                            htmlFor="remember"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    {!isSubmitting
                    ? "Login to your account"
                    : <>
                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                        </svg>
                        <span className="leading-3 text-base">Loading...</span>
                    </>
                    }
                    
                </button>

            </form>
            <div
                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
            >
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
            </div>

            <a
                className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-4 w-full uppercase mx-auto justify-center "
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
            >
                {/*<!-- Facebook --> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 8 19"
                >
                    <path
                        fillRule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 00-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 015.592 3h.543z"
                        clipRule="evenodd"
                    ></path>
                </svg>
                Continue with Facebook
            </a>
            <a
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-4 w-full uppercase justify-center"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={handleGithub}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 .333A9.911 9.911 0 006.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 00-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 011.518 1.021 2.11 2.11 0 002.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 014.7 7.068a3.56 3.56 0 01.095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 014.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 011.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 01.673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0010 .333z"
                        clipRule="evenodd"
                    ></path>
                </svg>
                Continue with Github
            </a>
            <a
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 w-full uppercase justify-center"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={handleGoogle}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 18 19"
                >
                    <path
                        fillRule="evenodd"
                        d="M8.842 18.083a8.8 8.8 0 01-8.65-8.948 8.841 8.841 0 018.8-8.652h.153a8.464 8.464 0 015.7 2.257l-2.193 2.038A5.27 5.27 0 009.09 3.4a5.882 5.882 0 00-.2 11.76h.124a5.091 5.091 0 005.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002z"
                        clipRule="evenodd"
                    ></path>
                </svg>
                Continue with Google
            </a>
        </div>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers,
        },
    };
}


export default Login;
