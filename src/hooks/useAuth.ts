// useAuth.ts

import { useSelector } from 'react-redux'

export function useAuth() {
    const storedUser = localStorage.getItem('user')
    const storedUserData = storedUser ? JSON.parse(storedUser) : null

    const {
        email: reduxEmail,
        token,
        id: reduxId,
    } = useSelector((state: any) => state.user)

    const { email, id } = storedUserData || { email: reduxEmail, id: reduxId }

    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}