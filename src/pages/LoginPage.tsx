import { Link } from 'react-router-dom'
import Login from '../components/Login'

const LoginPage = () => {
    return (
        <div className='loginPage'>
            <h1>Страница Входа</h1>

            <Login />

            <p>
                Или <Link to='/signUp'>зарегестрироваться</Link>
            </p>
        </div>
    )
}

export default LoginPage;