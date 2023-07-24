import Link from "next/link";

export default function GetStarted() {
    return (
        <div className="flex h-screen items-center justify-center bg-[url(https://img.freepik.com/free-vector/blue-pink-halftone-background_53876-99004.jpg?w=2000)]">
            <div className="relative flex w-[40rem] flex-col justify-center overflow-hidden rounded-lg bg-white/50 py-32">
                <span className="absolute top-0 h-1 w-1/6 bg-blue-600"></span>

                <div className="flex flex-col items-center">
                    <p className="text-lg font-medium text-gray-600">Hello, random internet user!</p>
                    <h1 className="text-4xl font-medium text-gray-600">Welcome to Maxi!</h1>

                    <Link href="/login">
                        <button className="group mt-10 flex w-40 items-center justify-center rounded-lg bg-blue-700 py-2 text-center font-bold text-white transition">
                            Sign In
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
}