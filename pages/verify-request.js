import {Fragment, useEffect, useState} from "react";
import Link from "next/link";
import styles from "../styles/verify-request.module.css";
import {Transition} from "@headlessui/react";
import { HiOutlineCheckCircle, HiArrowLeft } from "react-icons/hi";

const VerifyRequest = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.document.body.classList.add("min-h-screen");
        const tmt = setTimeout(() => setShow(true), 1234);
        return () => {
            window.document.body.classList.remove("min-h-screen");
            clearTimeout(tmt);
        }
    }, []);
    return (
        <Transition
            show={show}
            appear={true}
            className={`font-poppins max-w-xs md:max-w-sm mx-auto shadow-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center rounded-2xl flex justify-center items-center flex-col`}
            as="div"
            enter="transform opacity-50 scale-75 ease-out duration-400 sm:duration-500"
            enterTo="opacity-100 scale-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <div className={`mx-auto my-auto ${styles.upperSide}`}>
                <HiOutlineCheckCircle 
                    className="w-12 h-12"
                />
                <h3 className={styles.status}>Success!</h3>
            </div>
            <div className={styles.lowerSide}>
                <p className={styles.message}>
                    An email verification mail containing a signin link has just been forwarded to you. Please check your email box, for next steps to continue.
                </p>
                <Link href="/" >
                    <button
                        className={`${styles.contBtn} rounded-lg px-5 text-center py-3 font-medium text-sm leading-snug flex gap-1`}
                    >
                        <HiArrowLeft className="w-5 h-5" />
                        Back to home
                    </button>
                </Link>
            </div>
        </Transition>
    )
};

export default VerifyRequest;