import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {
    const { user, updateUser, setUser, loading } = use(AuthContext);

    if (loading) return <div className='flex justify-center items-center p-10' >
        <span className="loading  loading-bars loading-xl"></span>
    </div >

    const handleProfile = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo);
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
        e.target.reset()
    }
    return (
        <div className="bg-[#00BFA5] min-h-screen py-12 px-6">
            <div className="max-w-2xl mx-auto flex flex-col gap-6">

                <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-4">
                    <img
                        src={`${user ? user.photoURL : "https://i.pravatar.cc/150"}`}
                        alt="profile"
                        className="w-24 h-24 rounded-full object-cover border-4 border-[#FFD93D] shadow"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">{user.displayName}</h2>
                    <p className="text-gray-400 text-sm">{user.email}</p>
                    <span className="bg-[#FFD93D] text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                        🧸 Toy Seller
                    </span>
                </div>

                {/* Update Form */}
                <form onSubmit={handleProfile}>
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">✏️ Edit Profile</h3>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-gray-700">Display Name</label>
                                <input
                                    name='name'
                                    type="text"
                                    placeholder="Your name"
                                    required
                                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#00BFA5] transition-all
                                    "
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-gray-700">Photo URL</label>
                                <input
                                    name='photo'
                                    type="text"
                                    required
                                    placeholder="https://example.com/photo.jpg"
                                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#00BFA5] transition-all"
                                />
                            </div>

                            <button type='submit' className="w-full bg-[#FFD93D] text-gray-800 font-bold py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-200 mt-2">
                                Save Changes ✅
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Profile;