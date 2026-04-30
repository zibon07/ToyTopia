import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    const location = useLocation();
    // console.log(location);
    if (loading) {
        return <div className='flex justify-center items-center p-10'>
            <span className="loading  loading-bars loading-xl"></span>
        </div>
    }
    if (user && user.email) {
        return children
    } else return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>

};

export default PrivateRoute;