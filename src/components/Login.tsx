import { getAuth, signInWithEmailAndPassword, UserCredential, User as FirebaseAuthUser } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUser } from '../store/slices/userSlice';
import { Form } from './Form';

interface User {
    email: string;
    id: string;
}

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential: UserCredential) => {
                const user: FirebaseAuthUser = userCredential.user;

                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                    } as User)
                );

                const userData = {
                    email: user.email,
                    id: user.uid,
                };
                localStorage.setItem('user', JSON.stringify(userData));

                navigate('/');
            })
            .catch(() => alert('Неверные данные!'));
    };

    return <Form title='Войти' handleClick={handleLogin} />;
};

export default Login;