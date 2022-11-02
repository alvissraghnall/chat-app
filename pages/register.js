import React, { useState } from "react";
import clsx from "clsx";
import { useFormValidator } from "../util/form/useFormValidator";
import Link from "next/link";
import styles from "../styles/Register.module.css";

// import RegisterCard from "../components/RegisterCard";


const Register = () => {
    
    const handleSubmit = e => {
        e.preventDefault();
        const { isValid } = validateForm({ form: values, errors: errors, forceTouchErrors: true });
        if (!isValid) alert("failed!");

        // POST request

        alert(JSON.stringify(values, null, 0));
    }


    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        username: ""
    });

    const { errors, validateForm, onBlurField } = useFormValidator(values);
    

    const handleChange = (ev) => {
        const field = ev.target.name;
        const nextState = {
            ...values,
            [field]: ev.target.value
        };
        setValues(nextState)
        if (errors[field].dirty) validateForm({
            form: nextState,
            errors,
            field,
        });
    }

    return (
        <div className={`p-4 flex items-center justify-center w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 ${styles.container}`}>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <h5 className="text-xl font-medium text-gray-900">
                    Hi There!
                </h5>
                <p className="text-l text-gray-600"> Register to continue with MeYou! </p>

                {/* <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="register-div group">
                        <input 
                            type="text" 
                            name="first_name" 
                            id="first_name" 
                            className="register-text-input" 
                            placeholder="" 
                            value={values.first_name}
                            onChange={handleChange}
                            onBlur={onBlurField}
                            required 
                        />
                        <label htmlFor="first_name" className="register-label"> Your First Name </label>
                    </div>
                    <div className="register-div group">
                        <input 
                            type="text" 
                            name="last_name" 
                            id="last_name" 
                            className="register-text-input" 
                            placeholder="" 
                            value={values.last_name}
                            onChange={handleChange}
                            onBlur={onBlurField}
                            required 
                        />
                        <label htmlFor="last_name" className="register-label"> Your Last Name </label>
                    </div>
                </div> */}

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="register-div group">
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className={clsx("register-text-input",
                                "peer"
                            )}
                            placeholder="" 
                            value={values.email}
                            onChange={handleChange}
                            onBlur={onBlurField}
                            required 
                        />
                        <label htmlFor="email" className="register-label"> E-mail Address </label>

                        {errors.email.dirty && errors.email.error ? (
                            <p className="form-field-error-msg">{errors.email.message}</p>
                            ) : null
                        }
                    </div>
                    <div className="register-div group">
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            className={clsx("register-text-input",
                                "peer"
                            )}
                            placeholder="" 
                            value={values.username}
                            onChange={handleChange}
                            onBlur={onBlurField}
                            required 
                        />
                        <label htmlFor="username" className="register-label"> Username </label>

                        {
                            errors.username.dirty && errors.username.error ? (
                                <p className="form-field-error-msg">{errors.username.message}</p>
                            ) : null
                        }
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="register-div group">
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className={clsx("register-text-input",
                                "peer"
                            )}
                            placeholder="" 
                            value={values.password}
                            onChange={handleChange}
                            onBlur={onBlurField}
                            required 
                        />
                        <label 
                            htmlFor="password" 
                            className="register-label"> 
                            Your Password 
                        </label>
                        {
                            errors.password.dirty && errors.password.error ? (
                                <p className="form-field-error-msg">{errors.password.message}</p>
                            ) : null
                        }
                    </div>
                    <div className="register-div group">
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            id="confirmPassword" 
                            className={clsx("register-text-input",
                                "peer"
                            )}
                            placeholder=""
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={onBlurField}
                            required 
                        />
                        <label 
                            htmlFor="confirmPassword" 
                            className="register-label"> 
                            Confirm Password 
                        </label>
                        {
                            errors.confirmPassword.dirty && errors.confirmPassword.error ? (
                                <p className="form-field-error-msg">{errors.confirmPassword.message}</p>
                            ) : null
                        }
                    </div>
                </div>

                <button 
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"    
                >
                    Submit
                </button>

                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Already have an account? <Link href="login" className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
                </div>

            </form>

        </div>
    );
}

export default Register;