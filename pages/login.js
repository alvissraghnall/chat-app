import { useState } from "react";
import styles from "../styles/Register.module.css";
import { signIn, getProviders } from "next-auth/react";

const Login = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = ev => {
        ev.preventDefault();

        signIn("email",
            { callbackUrl: "/user", email }
        );
    }

    const handleGoogle = ev => {
        signIn("google", { callbackUrl: "/user",  });
    }

    return (
        <div className={`p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ${styles.container}`}>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <h5 className="text-xl center text-center font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
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
                                required 
                            />
                        </div>
                        <label 
                            htmlFor="remember" 
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Login to your account
                </button>

            </form>
            <div
                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
            >
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
            </div>

            <a
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                style={{backgroundColor: "#3b5998"}}
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
            >
                {/*<!-- Facebook --> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    class="w-3.5 h-3.5 mr-2"
                >
                {/*<!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
                </svg>
                Continue with Facebook
            </a>

            <a
                className="px-7 py-3 text-dark font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                style={{backgroundColor: "#fff"}}
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={handleGoogle}
            >
                <svg 
                    style={{color: "#4287f5", /* --darkreader-inline-color:#9fc2e9, --darkreader-inline-fill:currentColor */}} 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    className="bi bi-google w-3.5 h-3.5 mr-2" 
                    viewBox="0 0 16 16" 
                    data-darkreader-inline-color="" 
                    data-darkreader-inline-fill=""
                > 
                    <path 
                        d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" 
                        fill="#bcc81e" 
                        data-darkreader-inline-fill="" 
                        style={{/*"--darkreader-inline-fill:#112249;" */}}
                    >
                    </path> 
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