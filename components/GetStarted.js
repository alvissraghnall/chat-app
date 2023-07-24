import Link from "next/link";

export default function GetStarted() {
    return (
        <div class="flex h-screen w-screen items-center justify-center" style="background-image:url(https://img.freepik.com/free-vector/blue-pink-halftone-background_53876-99004.jpg?w=2000)">
            <div class="relative flex w-[40rem] flex-col justify-center overflow-hidden rounded-lg bg-white/50 py-32">
                <span class="absolute top-0 h-1 w-1/6 bg-blue-600"></span>

                <div class="flex flex-col items-center">
                    <p class="text-lg font-medium text-gray-600">Hello, random internet user!</p>
                    <h1 class="text-4xl font-medium text-gray-600">Welcome to Maxi!</h1>

                    <Link href="/login">
                        <button class="group mt-10 flex w-40 items-center justify-center rounded-lg bg-blue-700 py-2 text-center font-bold text-white transition">
                            Get Started
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