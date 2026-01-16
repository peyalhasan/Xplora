import { LogIn, ShieldCheck } from "lucide-react";
import { motion } from 'motion/react'
import LoginForm from "../components/Auth/LoginForm";
import CustomCursor from "../components/common/CustomCursor";

const Login = () => {
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
                            Welcome back
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-400"
                        >
                            Sign in to access <span className="text-yellow-500 font-bold">your </span> account.
                        </motion.p>
                    </div>
                    {/* Login From */}
                    <LoginForm />
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

export default Login;