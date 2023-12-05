//Form.tsx

import React, { useState, ChangeEvent } from 'react'
import '../styles/Form.scss'

interface FormProps {
    title: string
    handleClick: (email: string, pass: string) => void
}

const Form: React.FC<FormProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div className='formContainer'>
            <input
                type='email'
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                }
                placeholder='Введите Email'
            />

            <input
                type='password'
                value={pass}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPass(e.target.value)}
                placeholder='Введите пароль'
            />

            <button onClick={() => handleClick(email, pass)}>{title}</button>
        </div>
    )
}

export { Form }