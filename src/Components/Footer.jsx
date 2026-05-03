import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-[#009688] mt-10 text-white pt-12 pb-6 px-6'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10'>
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-bold text-[#FFD93D]">ToyTopia</h2>
                    <p className="text-white/70 text-sm leading-relaxed">
                        The most trusted toy store for thousands of happy families. Safe, fun, and affordable toys for every child.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-[#FFD93D] text-base">Quick Links</h3>
                    <Link to="/" className="text-white/70 hover:text-[#FFD93D] text-sm transition-colors">🏠 Home</Link>
                    <Link to="/profile" className="text-white/70 hover:text-[#FFD93D] text-sm transition-colors">👤 My Profile</Link>
                    <Link to="/" className="text-white/70 hover:text-[#FFD93D] text-sm transition-colors">🧸 All Toys</Link>
                    <Link to="/auth/login" className="text-white/70 hover:text-[#FFD93D] text-sm transition-colors">🔐 Login</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-[#FFD93D] text-base">Legal</h3>
                    <Link className="text-white/70 hover:text-[#FFD93D] text-sm transition-colors">📄 Terms & Conditions</Link>
                    <Link className="text-white/70 hover:text-[#FFD93D] text-sm transition-colors">🔒 Privacy Policy</Link>
                    <Link className="text-white/70 hover:text-[#FFD93D] text-sm transition-colors">🔄 Refund Policy</Link>
                    <Link className="text-white/70 hover:text-[#FFD93D] text-sm transition-colors">❓ FAQ</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-[#FFD93D] text-base">Follow Us</h3>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-[#FFD93D] text-sm transition-colors">📘 Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-[#FFD93D] text-sm transition-colors">📸 Instagram</a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-[#FFD93D] text-sm transition-colors">🐦 Twitter / X</a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-[#FFD93D] text-sm transition-colors">▶️ YouTube</a>
                    <p className="text-white/70 text-sm mt-1">📧 support@toytopia.com</p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-white/50 text-xs">© 2026 ToyTopia. All rights reserved.</p>
                <div className="flex gap-4">
                    <Link className="text-white/50 hover:text-[#FFD93D] text-xs transition-colors">Terms</Link>
                    <Link className="text-white/50 hover:text-[#FFD93D] text-xs transition-colors">Privacy</Link>
                    <Link className="text-white/50 hover:text-[#FFD93D] text-xs transition-colors">Refund</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;