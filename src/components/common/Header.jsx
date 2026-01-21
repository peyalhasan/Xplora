import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import { Search, Menu, Compass, Map, Plane, Ship, LogOut, User, Settings, X } from "lucide-react";
import useAuth from "../../../hooks/useAuth";
import Loading from "./Loading";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Header = () => {
    const navigate = useNavigate();
    const { user, loading } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    if (loading) return <Loading />;

    const { displayName, photoURL, email } = user || {};

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/')
            toast.success('Sign Out Successfully')
        })
    }

    const navLinks = [
        { name: 'Destinations', path: '/destinations' },
        { name: 'Tours', path: '/tours' },
        { name: 'Flights', path: '/flights' },
        { name: 'Cruises', path: '/cruises' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 z-[100] w-full border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md transition-all duration-300 hover:bg-[#0a0a0a]/100"
        >
            <div className="flex items-center justify-between px-4 py-3 md:px-8 max-w-[1920px] mx-auto">

                {/* Left: Logo & Mobile Menu Toggle */}
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                        className="p-2 hover:bg-white/5 rounded-xl transition-colors md:hidden text-white"
                    >
                        {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <Link className="flex items-center gap-3 group" to="/home">
                        <img className="h-10 md:h-12 w-auto transition-transform group-hover:rotate-12" src="/Xplora.png" alt="Logo" />
                        <span className="text-xl md:text-2xl font-black tracking-tighter text-white">XPLORO</span>
                    </Link>
                </div>

                {/* Center: Desktop Search Bar */}
                <div className="hidden md:flex flex-1 max-w-xl mx-8 items-center">
                    <div className="relative w-full group">
                        <motion.div
                            animate={{ scale: isSearchFocused ? 1.02 : 1 }}
                            className={`flex items-center bg-white/5 border ${isSearchFocused ? 'border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.1)]' : 'border-white/10'} rounded-2xl px-4 py-2 transition-all`}
                        >
                            <Search className={`w-4 h-4 ${isSearchFocused ? 'text-yellow-500' : 'text-gray-500'}`} />
                            <input
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                                className="w-full bg-transparent border-none focus:ring-0 text-sm text-white px-3 placeholder:text-gray-600 outline-none"
                                placeholder="Search your next adventure..."
                                type="text"
                            />
                            <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] text-gray-500">
                                ⌘K
                            </kbd>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side: Nav Links & Profile */}
                <div className="flex items-center gap-3 md:gap-6">
                    {/* Desktop Nav Links */}
                    <nav className="hidden lg:flex xl:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.path} className="text-xs font-bold text-gray-400 hover:text-yellow-500 transition-colors uppercase tracking-widest">
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />

                    {/* Profile Dropdown */}
                    <div
                        className="relative flex items-center gap-3"
                        onMouseEnter={() => setIsMenuOpen(true)}
                        onMouseLeave={() => setIsMenuOpen(false)}
                    >
                        <div className="hidden lg:block text-right">
                            <p className="text-xs font-bold text-white leading-tight truncate max-w-[100px]">{displayName || 'User'}</p>
                            <p className="text-[10px] text-yellow-500 font-medium uppercase tracking-tighter">Pro Explorer</p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="w-10 h-10 md:w-11 md:h-11 rounded-2xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-yellow-400 to-yellow-700 p-0.5 shadow-lg shadow-yellow-500/10"
                        >
                            <div className="w-full h-full bg-[#121212] rounded-[14px] flex items-center justify-center overflow-hidden">
                                {photoURL ? (
                                    <img src={photoURL} alt="p" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                                ) : (
                                    <User className="w-5 h-5 text-yellow-500" />
                                )}
                            </div>
                        </motion.button>

                        <AnimatePresence>
                            {isMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute right-0 top-full pt-2 w-64 z-[60]"
                                >
                                    <div className="bg-[#121212] border border-white/10 rounded-2xl shadow-2xl p-2 backdrop-blur-2xl">
                                        <div className="px-4 py-3 border-b border-white/5 mb-2">
                                            <p className="text-sm font-bold text-white truncate">{displayName}</p>
                                            <p className="text-[10px] text-gray-500 truncate">{email}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <Link to="/profile" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                                                <User size={16} className="text-yellow-500" /> My Profile
                                            </Link>
                                            <Link to="/settings" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                                                <Settings size={16} className="text-yellow-500" /> Settings
                                            </Link>
                                        </div>
                                        <div className="mt-2 pt-2 border-t border-white/5">
                                            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-xl transition-all font-bold">
                                                <LogOut size={16} /> Sign Out
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileNavOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-[#0a0a0a] border-t border-white/5 overflow-hidden"
                    >
                        <div className="p-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name} 
                                    to={link.path} 
                                    onClick={() => setIsMobileNavOpen(false)}
                                    className="block text-sm font-bold text-gray-400 hover:text-yellow-500 uppercase tracking-widest"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;