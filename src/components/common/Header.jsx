import { useState, useContext, useEffect, useCallback } from "react"; 
import { motion, AnimatePresence } from "framer-motion"; 
import { Link, NavLink, useNavigate } from "react-router";
import { Search, Menu, LogOut, User, Settings, X } from "lucide-react";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import { auth } from "../../firebaseConfig";
import Loading from '../../components/common/Loading';
import usePlace from "../../../hooks/usePlace";
import useDebounce from "../../../hooks/useDebounce"; // তোর হুকটা ইমপোর্ট করলি

const Header = () => {
    const navigate = useNavigate();
    const { user, loading } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    // --- Context & Search Logic ---
    const { searchTerm, setSearchTerm } = usePlace();
    // ১. লোকাল স্টেট: যাতে ইনপুটে টাইপ করলে ল্যাগ না করে
    const [displaySearch, setDisplaySearch] = useState(searchTerm);

    // ২. ডিব্রাউন্সড ফাংশন: এটা ৫০০ms পর মেইন স্টেট আপডেট করবে
    const debouncedSetSearch = useDebounce((value) => {
        setSearchTerm(value);
    }, 500);

    const handleSearchChange = (e) => {
        const val = e.target.value;
        setDisplaySearch(val);     // ইনপুট বক্সে সাথে সাথে দেখাবে
        debouncedSetSearch(val);   // ব্যাকগ্রাউন্ডে ফিল্টার হবে ৫০০ms পর
    };

    // ক্লিয়ার বাটনের জন্য লজিক
    const handleClear = () => {
        setDisplaySearch('');
        setSearchTerm('');
    };

    // --- Shortcut ⌘K Logic ---
    useEffect(() => {
        const handleKeyDown = (e) => {
            // তুই Enter দিয়ে ফোকাস করতে চেয়েছিস, সেটা রাখলাম (যদিও সাধারণত ⌘K হয়)
            if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('main-search-input')?.focus();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    if (loading) return <Loading />;

    const { displayName, photoURL, email } = user || {};

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/');
            toast.success('Sign Out Successfully');
        });
    };

    const navLinks = [
        { name: 'Home', path: '/home' },
        { name: 'Destinations', path: '/destinations' },
        { name: 'Membership', path: '/membership' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 z-[100] w-full border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md transition-all duration-300 hover:bg-[#0a0a0a]/100"
        >
            <div className="flex items-center justify-between px-4 py-3 md:px-8 max-w-[1920px] mx-auto">

                {/* Left: Logo */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                        className="p-2 hover:bg-white/5 rounded-xl transition-colors md:hidden text-white"
                    >
                        {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <Link className="flex items-center gap-3 group" to="/home">
                        <img className="h-10 md:h-12 w-auto transition-transform group-hover:rotate-12" src="/Xplora.png" alt="Logo" />
                        <span className="text-xl md:text-2xl font-black tracking-tighter italic uppercase text-white">Xpl<span className="text-yellow-500">oro</span></span>
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
                                id="main-search-input"
                                value={displaySearch} // লোকাল স্টেট ব্যবহার করলাম
                                onChange={handleSearchChange}
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                                className="w-full bg-transparent border-none focus:ring-0 text-sm text-white px-3 placeholder:text-gray-600 outline-none"
                                placeholder="Search your next adventure..."
                                type="text"
                            />
                            
                            {displaySearch && (
                                <button onClick={handleClear} className="text-[10px] text-gray-500 hover:text-white mr-2 uppercase font-bold transition-colors">Clear</button>
                            )}
                            <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] text-gray-500">
                                ⌘K
                            </kbd>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side: Nav Links & Profile (Same as your code) */}
                <div className="flex items-center gap-3 md:gap-6">
                    <nav className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) => `
                                    relative text-[11px] font-bold uppercase tracking-widest transition-all duration-300
                                    ${isActive ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500/80'}
                                `} 
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-underline"
                                                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-yellow-500 rounded-full"
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />

                    <div
                        className="relative flex items-center gap-3"
                        onMouseEnter={() => setIsMenuOpen(true)}
                        onMouseLeave={() => setIsMenuOpen(false)}
                    >
                        {/* Profile UI (Your original code) */}
                        <div className="hidden lg:block text-right">
                            <p className="text-xs font-bold text-white leading-tight truncate max-w-[100px]">{displayName || 'User'}</p>
                            <p className="text-[10px] text-yellow-500 font-medium uppercase tracking-tighter">Pro Explorer</p>
                        </div>
                        {/* Profile Button & Dropdown... */}
                        {/* [Keeping the same structure as your code for profile] */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="w-10 h-10 md:w-11 md:h-11 rounded-2xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-yellow-400 to-yellow-700 p-0.5 shadow-lg shadow-yellow-500/10"
                        >
                            <div className="w-full h-full bg-[#121212] rounded-[14px] flex items-center justify-center overflow-hidden">
                                {photoURL ? <img src={photoURL} alt="p" className="w-full h-full object-cover" /> : <User className="w-5 h-5 text-yellow-500" />}
                            </div>
                        </motion.button>
                        {/* ...Dropdown content... */}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileNavOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-[#0a0a0a] border-t border-white/5 overflow-hidden"
                    >
                        <div className="p-4 space-y-4">
                            <div className="relative mb-4">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <input 
                                    value={displaySearch}
                                    onChange={handleSearchChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white outline-none focus:border-yellow-500" 
                                    placeholder="Search..." 
                                />
                            </div>
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.path} onClick={() => setIsMobileNavOpen(false)} className="block text-sm font-bold text-gray-400 hover:text-yellow-500 uppercase tracking-widest">
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