import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SecNav from '../components/secNav/SecNav';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import Button from '../components/buttons/Button.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const API = import.meta.env.VITE_APP_URI_API;


  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API}/login`, { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "success") {
          navigate('/home'); 
        }
      })
      .catch(err => console.log(err));
  };

  const loginwithgoogle = () => {
    window.open(`${API}/auth/google/callback`, "_self")
  }



  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <Fragment>
      <SecNav />
      <section className='fullSection border-0 d-flex align-items-start justify-content-center'>
        <div className="containerSm d-flex align-items-start justify-content-cente flex-column gap-2">
          <div className='pagehadding'>
            <h1>Welcome to The Next Stream!</h1>
            <p>Your gateway to personalized movie and TV series recommendations.</p>
          </div>
          <form onSubmit={handleSubmit} className="loginForm d-flex align-items-center justify-content-center flex-column gap-4">
            <label className="gap-1 d-flex flex-column">Email address
              <input onChange={(e) => setEmail(e.target.value)} autoComplete="email" type="email" />
            </label>
            <label className=" gap-1 d-flex flex-column">Password
              <div className='passwordinput w-100 position-relative'>
                <input onChange={(e) => setPassword(e.target.value)} autoComplete="password" type={showPassword ? "text" : "password"} />
                <span onClick={togglePasswordVisibility}>{showPassword ? <IoIosEye /> : <IoIosEyeOff />}</span>
              </div>
              <label className='ForgotBtn'>Forgot Password?</label>
            </label>
            <Button linkprop={"/home"}>log in</Button >
          </form>
          <p className='my-3 sperator d-flex align-items-center justify-content-center'>
            OR
          </p>
          <div className='buttonDiv d-flex align-items-start justify-content-cente flex-column gap-2'>
            <Button onclick={loginwithgoogle}><FcGoogle />Continue with Google</Button>
            <Button><BsFacebook />Continue with Facebook</Button>
          </div>
          <p className='mt-3'>Don't have an account? <span onClick={() => navigate('/register')} >Sign Up Now!</span ></p>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
