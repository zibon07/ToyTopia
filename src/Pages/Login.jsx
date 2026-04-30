import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {
    const { logIn, GoogleSignUp, setUser } = use(AuthContext);
    const [show, setShow] = useState(false);

    const handleGoogleSignIn = () => {
        GoogleSignUp()
            .then(result => {
                const user = result.user;
                setUser(user)
                toast.success("sign in successful")
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            })
    }
    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({ email, password })
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Login Successful')

            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage)
                console.log(errorCode, errorMessage);
            })
    }
    return (
        <div className='flex justify-center p-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogIn}>
                        <fieldset className="fieldset">
                            {/* Email */}
                            <label className="label">Email</label>
                            <input
                                type="email"
                                className="input"
                                placeholder="Email"
                                name='email' />
                            {/* Password */}
                            <div className='relative'>
                                <label className="label">Password</label>
                                <input
                                    type={show ? "text" : "password"}
                                    className="input"
                                    placeholder="Password"
                                    name='password' />
                                <span onClick={() => setShow(!show)} className='absolute right-7 top-7 cursor-pointer text-lg'>

                                    {
                                        show ? <FaEye /> :
                                            <FaEyeSlash />
                                    }

                                </span>
                            </div>


                            <div><a className="link link-hover className='underline text-teal-500">Forgot password?</a></div>
                            <button
                                type='submit'
                                className="btn btn-neutral mt-4">Login</button>


                        </fieldset>
                    </form>
                    {/* login with google */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn cursor-pointer text-center bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <div className=''>
                        <Link to={"/auth/register"}><p>Don't Have An Account <span className='underline text-teal-500'>Register</span></p></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;