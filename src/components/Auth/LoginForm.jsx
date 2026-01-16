import axios from "axios";
import { Building2, Eye, EyeOff, LogIn, Mail, User , Lock} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import Field from "../common/Field";

const LoginForm = () => {
    const [userType, setUserType] = useState('seeker')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm();


    const onSubmit = async (formData) => {
        console.log(formData)
    };

    return (
        <div>

            {/* Login Card */}
            <div className="card p-8 md:p-10">
                {/* Form-e handleSubmit add kora holo */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Email Field */}
                    <Field label='Email' error={errors.email}>
                        <div className="relative">
                            <Mail className=' absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                            <input
                                {...register('email', {
                                    required: "Email is required",
                                })}
                                className={`auth-input w-full input pl-10 ${errors.email ? 'border-red-600' : 'border-gray-200'}`}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                    </Field>

                    {/* Password Field */}
                    <Field label="Password" error={errors.password}>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                            <input
                                type={showPassword ? 'text' : "password"}
                                id="password"
                                {...register('password', {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Min length 6" }
                                })}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSubmit(onSubmit)();
                                    }
                                }}
                                className={`input pl-10 pr-10 w-full ${errors.password ? 'border-red-600' : ''}`}
                                placeholder="Enter your password"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                                ) : (
                                    <Eye className="h-4 w-4 text-muted-foreground" />
                                )}
                            </button>
                        </div>
                    </Field>

                    <p>{errors?.root?.random?.message}</p>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-full text-base h-11 flex items-center justify-center">
                        <LogIn className="h-4 w-4 mr-2" />
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-muted-foreground font-medium">Or continue with</span>
                    </div>
                </div>

                {/* Sign Up Link */}
                <div className="mt-8 text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link to='/register' className='text-primary hover:underline font-medium'>
                        Sign up 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;