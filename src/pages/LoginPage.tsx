import { Link } from 'react-router-dom'
import Login from '../components/Login'
import '../styles/LoginPage.scss'
import ThemeSwitcher from '../components/ThemeSwitch'

const LoginPage = () => {
    return (
        <div className='login-page'>
            <h1>Страница Входа</h1>

            <Login />

            <p>
                Или <Link to='/signUp'>зарегестрироваться</Link>
            </p>

            <ThemeSwitcher />
        </div>
    )
}

export default LoginPage