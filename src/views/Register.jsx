import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Logo from './Logo';
import { signUp } from "../API/endpoint/signUp";
import { setCredintial } from "../helpers";
import toast, { Toaster } from 'react-hot-toast';

export default function Register() {
    const [passwordStrength, setPasswordStrength] = useState('');
    const Navigate =useNavigate(); 
    const evaluatePasswordStrength = (password) => {
        if (password.length < 6) {
            setPasswordStrength('Weak');
        } else if (password.length >= 6 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[\W_]/)) {
            setPasswordStrength('Strong');
        } else {
            setPasswordStrength('Medium');
        }
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            terms: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            userName: Yup.string().required('Username is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
            terms: Yup.boolean().oneOf([true], 'You must accept the Terms and Conditions'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await signUp(values);
                if (response.status !== 200) {
                    toast.error('SignUp Failed');
                } else {
                    toast.success('SignUp success');
                    setTimeout(() => {
                        Navigate('/SignIn');
                    }, 1500);
                }
            } catch (error) {
                toast.error('SignUp Failed');
            }
        },
    });

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center">
            <div className="w-11/12 h-[68px] py-[20px] px-[3px]">          
                <Link to='/'>
                    <Logo />
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="max-w-md w-full mx-auto p-5 text-center font-sans">
                    <h2 className="mb-5 text-2xl">SignUp</h2>
                    <form className="flex flex-col space-y-4" onSubmit={formik.handleSubmit}>
                        <div className="flex space-x-4">
                            <div className="text-left flex-1">
                                <label htmlFor="firstName" className="block mb-1 text-sm">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="w-full p-2 mb-3 bg-gray-200 rounded border-none"
                                    {...formik.getFieldProps('firstName')}
                                />
                                {formik.touched.firstName && formik.errors.firstName ? (
                                    <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
                                ) : null}
                            </div>
                            <div className="text-left flex-1">
                                <label htmlFor="lastName" className="block mb-1 text-sm">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="w-full p-2 mb-3 bg-gray-200 rounded border-none"
                                    {...formik.getFieldProps('lastName')}
                                />
                                {formik.touched.lastName && formik.errors.lastName ? (
                                    <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className="text-left">
                            <label htmlFor="userName" className="block mb-1 text-sm">Username</label>
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                className="w-full p-2 mb-3 bg-gray-200 rounded border-none"
                                {...formik.getFieldProps('userName')}
                            />
                            {formik.touched.userName && formik.errors.userName ? (
                                <p className="text-red-500 text-sm">{formik.errors.userName}</p>
                            ) : null}
                        </div>
                        <div className="text-left">
                            <label htmlFor="email" className="block mb-1 text-sm">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 mb-3 bg-gray-200 rounded border-none"
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <p className="text-red-500 text-sm">{formik.errors.email}</p>
                            ) : null}
                        </div>
                        <div className="text-left">
                            <label htmlFor="password" className="block mb-1 text-sm">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full p-2 mb-3 bg-gray-200 rounded border-none"
                                {...formik.getFieldProps('password')}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    evaluatePasswordStrength(e.target.value);
                                }}
                            />
                            <p className={`text-sm mt-1 ${passwordStrength === 'Strong' ? 'text-green-500' : passwordStrength === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>
                                {passwordStrength && `Password strength: ${passwordStrength}`}
                            </p>
                            {formik.touched.password && formik.errors.password ? (
                                <p className="text-red-500 text-sm">{formik.errors.password}</p>
                            ) : null}
                        </div>
                        <div className="text-left">
                            <label htmlFor="confirmPassword" className="block mb-1 text-sm">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full p-2 mb-3 bg-gray-200 rounded border-none"
                                {...formik.getFieldProps('confirmPassword')}
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>
                            ) : null}
                        </div>
                        <div className="text-left flex items-center">
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                className="mr-2"
                                {...formik.getFieldProps('terms')}
                            />
                            <label htmlFor="terms" className="text-sm">
                                I agree to the <Link to="/terms" className="text-blue-500 hover:underline">Terms and Conditions</Link>
                            </label>
                            {formik.touched.terms && formik.errors.terms ? (
                                <p className="text-red-500 text-sm">{formik.errors.terms}</p>
                            ) : null}
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 rounded font-medium mt-4 hover:bg-blue-700">SignUp</button>
                    </form>
                    <p className="mt-5 text-sm text-gray-700">
                        Already have an account? <Link to="/SignIn" className="text-blue-500 hover:underline">Sign in</Link>
                    </p>
                    <Toaster />
                </div>
            </div>
        </div>
    );
}
