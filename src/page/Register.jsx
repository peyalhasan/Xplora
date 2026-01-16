import { motion } from 'motion/react'; 
import { UserPlus } from 'lucide-react';
import RegisterForm from '../components/Auth/RegisterForm';
import CustomCursor from '../components/common/CustomCursor';

const Register = () => {
    return (
        <main className="container   relative mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
            <CustomCursor />
            <div className="max-w-2xl w-full mx-auto">
                
                <div className="text-center mb-10">
                    <motion.div 
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 mb-6"
                    >
                        <UserPlus className="h-8 w-8 text-black" />
                    </motion.div>

                    <motion.h1 
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl font-bold mb-3 text-white"
                    >
                        Create Your Account
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400"
                    >
                        Join <span className="text-yellow-500 font-bold">Xploro</span> and start your premium journey. ✈️
                    </motion.p>
                </div>

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                        delay: 0.5, 
                        duration: 0.5,
                        ease: "easeOut" 
                    }}
                    className="bg-[#484c52] border border-gray-800 p-4 rounded-2xl shadow-2xl"
                >
                    <RegisterForm />
                </motion.div>

            </div>
        </main>
    );
};

export default Register;