import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    const { createUser, setUser, GoogleSignUp, updateUser } = use(AuthContext);
    const [show, setShow] = useState(false);
    const handleGoogleSignIn = () => {
        GoogleSignUp()
            .then(result => {
                const user = result.user;
                setUser(user)
                toast.success("sign in successful")
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage)
            })
    }
    const handleSignUp = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, photo, email, password);

        const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegExp.test(password)) {
            toast.error("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.")
            return
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;

                updateUser({
                    displayName: name,
                    photoURL: photo
                }).then(() => {
                    setUser({
                        ...user,
                        displayName: name,
                        photoURL: photo
                    });
                }).catch((error) => {
                    console.log(error)
                    setUser(user);
                })

                // console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage)
            })

    }

    return (
        <div className='flex justify-center p-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSignUp}>
                        <fieldset className="fieldset">
                            {/* name */}
                            <label className="label">Name</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="Name"
                                name='name'
                                required />
                            {/* Photo URL */}
                            <label className="label">Photo URL</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="Photo URL"
                                name='photo'
                                required />
                            {/* Email */}
                            <label className="label">Email</label>
                            <input
                                type="email"
                                className="input"
                                placeholder="Email"
                                name='email'
                                required />
                            {/* Password */}
                            <div className='relative'>
                                <label className="label">Password</label>
                                <input
                                    type={show ? "text" : "password"}
                                    className="input"
                                    placeholder="Password"
                                    name='password'
                                    required />
                                <span onClick={() => setShow(!show)} className='absolute right-7 top-7 cursor-pointer text-lg'>

                                    {
                                        show ? <FaEye /> :
                                            <FaEyeSlash />
                                    }

                                </span>
                            </div>
                            {/* signUp with google */}
                            <button
                                onClick={handleGoogleSignIn}
                                className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Register with Google
                            </button>
                            <button
                                className="btn btn-neutral mt-4"
                                type='submit'
                            >Register</button>
                            <div className=''>
                                <Link to={"/auth/login"}><p>Already Have An Account <span className='underline text-teal-500'>Login</span></p></Link>

                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;