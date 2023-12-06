//HomeButton.tsx

import { useNavigate } from 'react-router-dom'

const HomeButton = () => {
    const navigate = useNavigate()

    const GoHome = () => {
        navigate('/')
    }

    return <button className='homeButton' onClick={GoHome}>Main Page</button>
}

export default HomeButton
