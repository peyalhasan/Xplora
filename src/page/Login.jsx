import { LogIn, ShieldCheck } from "lucide-react";
import LoginForm from "../components/Auth/LoginForm";

const Login = () => {
    return (
        <div>

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-md mx-auto">
                    {/* Page Title */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center ">
                            <LogIn className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight mb-3">
                            Welcome Back
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Sign in to access your account
                        </p>
                    </div>
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