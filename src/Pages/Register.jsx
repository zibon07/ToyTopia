import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center p-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form>
                        <fieldset className="fieldset">
                            {/* name */}
                            <label className="label">Name</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="Name"
                                name='name' />
                            {/* Photo URL */}
                            <label className="label">Photo URL</label>
                            <input
                                type=""
                                className="input"
                                placeholder="Photo URL"
                                name='photo' />
                            {/* Email */}
                            <label className="label">Email</label>
                            <input
                                type="email"
                                className="input"
                                placeholder="Email"
                                name='email' />
                            {/* Password */}
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Register</button>
                            <div className=''>
                                <Link to={"/auth/register"}><p>Already Have An Account <span className='underline text-teal-500'>Login</span></p></Link>

                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;