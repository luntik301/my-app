//LogoutButton.tsx

import { removeUser } from '../store/slices/userSlice'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const LogoutButton = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { email } = useAuth()

    const handleLogout = () => {
        localStorage.removeItem('user')
        dispatch(removeUser())
        navigate('/login')
    }

    return (
        <button className='LogoutButton' onClick={handleLogout}>
            Выйти из {email}
        </button>
    )
}

export default LogoutButton
