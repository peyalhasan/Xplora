import axios from "axios";
import { motion } from 'motion/react';
import { Building2, Eye, EyeOff, LogIn, Mail, User, Lock } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import Field from "../common/Field";
import { registerWithEmailAndPassword } from "../../firebaseConfig";
import { toast } from "react-toastify";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = async (formData) => {
        const {email, password} = formData
        try{
           await registerWithEmailAndPassword(email, password)
            navigate('/')
        }catch(err){
            toast.error(err.message)
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Login Card */}
            <div className="card p-8 md:p-10 bg-[#121212]/80 backdrop-blur-md border border-gray-800 shadow-2xl">

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Email Field with Motion */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <Field label='Email' error={errors.email}>
                            <div className="relative group">
                                <Mail className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-yellow-500 transition-colors' />
                                <input
                                    {...register('email', { required: "Email is required" })}
                                    className={`auth-input w-full input pl-10 bg-[#1a1a1a] border-gray-800 focus:border-yellow-500 transition-all ${errors.email ? 'border-red-600' : ''}`}
                                    type="email"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </Field>
                    </motion.div>

                    {/* Password Field with Motion */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <Field label="Password" error={errors.password}>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-yellow-500 transition-colors" />
                                <input
                                    type={showPassword ? 'text' : "password"}
                                    {...register('password', { required: "Password is required" })}
                                    className={`input pl-10 pr-10 w-full bg-[#1a1a1a] border-gray-800 focus:border-yellow-500 transition-all ${errors.password ? 'border-red-600' : ''}`}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-yellow-500 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </Field>
                    </motion.div>

                    {/* Submit Button with Hover/Tap Animation */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="btn btn-primary w-full text-base h-11 flex items-center justify-center bg-yellow-500 text-black hover:bg-yellow-600 border-none shadow-lg shadow-yellow-500/20"
                    >
                        <LogIn className="h-4 w-4 mr-2" />
                        Sign In
                    </motion.button>
                </form>

                {/* Divider with Fade-in */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="relative my-8"
                >
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-800" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-[#121212] text-muted-foreground font-medium">Or continue with</span>
                    </div>
                </motion.div>

                {/* Footer Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 text-center text-sm text-muted-foreground"
                >
                    Already have an account?{" "}
                    <Link to='/' className='text-yellow-500 hover:underline font-medium transition-all'>
                        Login
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default RegisterForm;