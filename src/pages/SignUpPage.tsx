//SignUpPage.tsx

import { Link } from 'react-router-dom'
import SignUp from '../components/SignUp'
import '../styles/SignUpPage.scss'
import ThemeSwitcher from '../components/ThemeSwitch'

const SignUpPage = () => {
    return (
        <div className='sign-up-page'>
            <h1>Страница Регистрации</h1>

            <SignUp />

            <p>
                Или <Link to='/login'>войти в аккаунт</Link>
            </p>

            <ThemeSwitcher />
        </div>
    )
}

export default SignUpPage
