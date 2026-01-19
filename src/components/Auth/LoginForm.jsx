import { motion } from 'motion/react'
import { Eye, EyeOff, LogIn, Mail, Lock } from "lucide-react";
import { FaGoogle, FaGithub } from "react-icons/fa"; 
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import Field from "../common/Field";
import { loginWithEmailAndPassword, signInwithGithub, signInwithGoolge } from "../../firebaseConfig";
import { toast } from "react-toastify";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (formData) => {
        const { email, password } = formData;
        try {
            await loginWithEmailAndPassword(email, password);
            navigate('/home');
            toast.success('Login successfully');
        } catch (err) {
            toast.error('Wrong Email or Password');
        }
    };

    // Social Login Handlers
    const handleGoogleSignIn = async () => {
        try {
            await signInwithGoolge();
            navigate('/home');
            toast.success('Signed in with Google');
        } catch (err) {
            toast.error('Google Sign-in failed');
        }
    }

    const handleGithubSignIn = async () => {
        try {
            await signInwithGithub();
            navigate('/home');
            toast.success('Signed in with Github');
        } catch (err) {
            toast.error('Github Sign-in failed');
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="card p-8 md:p-10 bg-[#121212]/80 backdrop-blur-md border border-gray-800 shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <Field label='Email' error={errors.email}>
                        <div className="relative group">
                            <Mail className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white z-20' />
                            <input
                                {...register('email', { required: "Email is required" })}
                                className={`auth-input w-full input pl-10 bg-[#1a1a1a] border-gray-800 focus:border-yellow-500 transition-all ${errors.email ? 'border-red-600' : ''}`}
                                type="email"
                                placeholder="you@example.com"
                            />
                        </div>
                    </Field>

                    <Field label="Password" error={errors.password}>
                        <div className="relative group">
                            <Lock className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white z-20' />
                            <input
                                type={showPassword ? 'text' : "password"}
                                {...register('password', { required: "Password is required" })}
                                className={`input pl-10 pr-10 w-full bg-[#1a1a1a] border-gray-800 focus:border-yellow-500 transition-all ${errors.password ? 'border-red-600' : ''}`}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
                            >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>
                    </Field>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="btn btn-primary w-full text-base h-11 bg-yellow-500 text-black hover:bg-yellow-600 border-none shadow-lg shadow-yellow-500/20"
                    >
                        <LogIn className="h-4 w-4 mr-2" />
                        Sign In
                    </motion.button>
                </form>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-800" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-[#121212] text-muted-foreground font-medium uppercase tracking-wider">Or continue with</span>
                    </div>
                </div>

                {/* Social Login Buttons - Flex Layout for better UI */}
                <div className="grid grid-cols-2 gap-4">
                    <motion.button
                        onClick={handleGoogleSignIn}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                        whileTap={{ scale: 0.95 }}
                        type="button" // type button জরুরি যাতে ফর্ম সাবমিট না হয়
                        className="flex items-center justify-center gap-2 h-11 border border-gray-700 rounded-lg text-white transition-all hover:border-yellow-500/50"
                    >
                        <FaGoogle className="text-red-500" />
                        <span className="text-sm font-medium">Google</span>
                    </motion.button>

                    <motion.button
                        onClick={handleGithubSignIn}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        className="flex items-center justify-center gap-2 h-11 border border-gray-700 rounded-lg text-white transition-all hover:border-yellow-500/50"
                    >
                        <FaGithub />
                        <span className="text-sm font-medium">Github</span>
                    </motion.button>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 text-center text-sm text-muted-foreground space-y-2"
                >
                    <div className="flex justify-center items-center gap-2">
                        <span>Forgot password?</span>
                        <Link to='/rereset' className='text-yellow-500 hover:underline font-medium'>
                            Reset password
                        </Link>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <span>Don't have an account?</span>
                        <Link to='/register' className='text-yellow-500 hover:underline font-medium'>
                            Create account
                        </Link>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LoginForm;