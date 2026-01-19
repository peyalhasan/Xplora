import { AuthContext } from '../Context';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../src/firebaseConfig';

const AuthProvider = ({ children }) => {
    const [user, loading, error] = useAuthState(auth)
    return (
        <AuthContext.Provider value={{ user, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;