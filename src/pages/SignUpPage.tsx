import { Link } from 'react-router-dom'
import SignUp from '../components/SignUp'

const SignUpPage = () => {
    return (
        <div className='RegisterPage'>
            <h1>Страница Регистрации</h1>

            <SignUp />

            <p>
                Или <Link to='/login'>войти в аккаунт</Link>
            </p>
        </div>
    )
}

export default SignUpPage