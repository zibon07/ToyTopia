import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log(loading, user)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const GoogleSignUp = () => {
        const GoogleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, GoogleProvider)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)

        })
        return () => {
            unsubscribe();

        }
    }, [])

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }
    const AuthData = {
        user,
        setUser,
        createUser,
        GoogleSignUp,
        logIn,
        logOut,
        loading,
        setLoading,
        updateUser,
        forgetPassword
    }
    return <AuthContext value={AuthData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;