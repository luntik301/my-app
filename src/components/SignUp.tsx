//SignUp.tsx

import React from 'react'
import { useDispatch } from 'react-redux'
import {
    getAuth,
    createUserWithEmailAndPassword,
    UserCredential,
    User as FirebaseAuthUser,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Form } from './Form'
import { setUser } from '../store/slices/userSlice'

interface User {
    email: string
    id: string
}

interface SignUpProps { }

const SignUp: React.FC<SignUpProps> = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = async (email: string, password: string) => {
        const auth = getAuth()

        try {
            const userCredential: UserCredential =
                await createUserWithEmailAndPassword(auth, email, password)
            const user: FirebaseAuthUser = userCredential.user

            dispatch(
                setUser({
                    email: user.email ?? '',
                    id: user.uid,
                } as User)
            )

            navigate('/')
        } catch (error) {
            alert('Неверные данные!')
        }
    }

    return <Form title='Зарегистрироваться' handleClick={handleRegister} />
}

export default SignUp
