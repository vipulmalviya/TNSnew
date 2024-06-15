import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { BsFacebook } from 'react-icons/bs';
import SecNav from '../components/secNav/SecNav';
import Button from '../components/buttons/Button.jsx';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Register = ({ click, prop, open }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const API = import.meta.env.VITE_APP_URI_API;

    console.log(API);

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API}/register`, { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "success") {
                    navigate('/login');
                }
            })
            .catch(err => console.log(err));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const loginwithgoogle = () => {
        window.open(`${API}/auth/google/callback`, "_self")
    }

    return (
        <Fragment>
            <SecNav />
            <section className='fullSection border-0 d-flex align-items-start justify-content-center'>
                <div className="containerSm d-flex align-items-start justify-content-cente flex-column gap-2">
                    <div className='pagehadding'>
                        <h1>Create an TNS account </h1>
                        <p>It will help provide you a specific room for your saved information</p>
                    </div>
                    <form onSubmit={handleSubmit} className="registerForm d-flex align-items-center justify-content-center flex-column gap-4">
                        <label className="gap-1 d-flex flex-column">Email address
                            <input onChange={(e) => setEmail(e.target.value)} autoComplete="email" type="email" />
                        </label>
                        <label className=" gap-1 d-flex flex-column">Password
                            <div className='passwordinput w-100 position-relative'>
                                <input onChange={(e) => setPassword(e.target.value)} autoComplete="password" type={showPassword ? "text" : "password"} />
                                <span onClick={togglePasswordVisibility}>{showPassword ? <IoIosEye /> : <IoIosEyeOff />}</span>
                            </div>
                        </label>
                        <div className='switchbtn d-flex'>
                            <span className="switch d-flex align-items-start">
                                <input id="switch-rounded" type="checkbox" />
                                <label htmlFor="switch-rounded">
                                </label>
                                <p className='d-flex align-items-start'>Receive great facts about great cinema,our technical updates and more.</p>
                            </span>
                        </div>
                        <Button>Continue with Email</Button>
                    </form>
                    <p className='my-3 sperator d-flex align-items-center justify-content-center'>
                        OR
                    </p>
                    <div className='buttonDiv d-flex align-items-start justify-content-cente flex-column gap-2'>
                        <Button onclick={loginwithgoogle}><FcGoogle />Continue with Google</Button>
                        <Button><BsFacebook />Continue with Facebook</Button>
                    </div>
                    <p className='mt-3 mb-0'>By Signing up i agree to Thenextstream’s <span> Terms of Service </span> and <span> Privacy Policy.</span></p>
                    <p className='m-0'>Already have an account? <span onClick={() => navigate('/login')}> Log in.</span></p>
                </div>
            </section>
        </Fragment >
    )
}

export default Register;
