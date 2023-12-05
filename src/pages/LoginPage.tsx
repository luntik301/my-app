import { Link } from 'react-router-dom'
import Login from '../components/Login'
import '../styles/LoginPage.scss'

const LoginPage = () => {
    return (
        <div className='login-page'>
            <h1>Страница Входа</h1>

            <Login />

            <p>
                Или <Link to='/signUp'>зарегестрироваться</Link>
            </p>
        </div>
    )
}

export default LoginPage