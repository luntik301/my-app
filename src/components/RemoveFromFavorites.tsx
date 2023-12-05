//RemoveFromFavorites.tsx

import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeFromFavorites } from '../store/slices/favoriteSlice'
import '../styles/FavoritesPage.scss'

interface CityCardProps {
    city: {
        id: number
        name: string
        country: string
        population: number
    }
}

const RemoveFromFavorites: React.FC<CityCardProps> = ({ city }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRemoveFromFavorites = (cityId: number) => {
        dispatch(removeFromFavorites(cityId))
        navigate('/')
    }

    return (
        <button
            className='RemoveFromFav'
            onClick={() => handleRemoveFromFavorites(city.id)}
        >
            Remove from Favorites
        </button>
    )
}

export default RemoveFromFavorites
