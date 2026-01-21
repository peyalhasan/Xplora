import { LogIn, Mail, ShieldCheck } from "lucide-react";
import { motion } from 'motion/react'
import LoginForm from "../components/Auth/LoginForm";
import CustomCursor from "../components/common/CustomCursor";
import { useForm } from "react-hook-form";
import Field from "../components/common/Field";
import { Link, NavLink, useNavigate } from "react-router";
import { resetPasswordByEmail } from "../firebaseConfig";
import { toast } from "react-toastify";

const Reset = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const onSubmit = async (formData) => {
        const {email} = formData
        try {
            await resetPasswordByEmail(email)
            navigate('/')
            
            toast.success('Password reset link sent to your email!');
        }catch(error){
            toast(error.message || 'Failed to send reset email')
        }
    }
    return (
        <div>

            <main className="container relative mx-auto px-4 py-8">
                <CustomCursor />
                <div className="max-w-md mx-auto">
                    {/* Page Title */}
                    <div className="text-center mb-8">
                        < motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 mb-6 ">
                            <LogIn className="h-8 w-8 text-primary" />
                        </motion.div>
                        <motion.h1
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl font-bold mb-3 text-white"
                        >
                            Reset your password
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-400"
                        >
                        </motion.p>
                    </div>
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
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="btn btn-primary w-full text-base h-11 bg-yellow-500 text-black hover:bg-yellow-600 border-none shadow-lg shadow-yellow-500/20"
                        >
                            <LogIn className="h-4 w-4 mr-2" />
                            Send
                        </motion.button>
                    </form>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 text-center text-sm text-muted-foreground space-y-2"
                    >
                        <div className="flex justify-center items-center gap-2">
                            <span>Don't have an account?</span>
                            <Link to='/register' className='text-yellow-500 hover:underline font-medium'>
                                Create account
                            </Link>
                        </div>
                    </motion.div>
                    {/* Security Note */}
                    <div className="mt-6 text-center">
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                            <ShieldCheck className="h-4 w-4" />
                            <p>
                                Your information is protected with industry-standard
                                encryption
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Reset;