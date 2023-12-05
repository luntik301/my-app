//AddToFavorites.tsx

import React from 'react'
import { useDispatch } from 'react-redux'
import { addToFavorites } from '../store/slices/favoriteSlice'
import { useNavigate } from 'react-router-dom'

interface CityCardProps {
    city: {
        id: number
        name: string
        country: string
        population: number
    }
}

const AddToFavorites: React.FC<CityCardProps> = ({ city }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddToFavorites = () => {
        dispatch(addToFavorites(city))
        navigate('/favorites')
    }

    return (
        <button className='AddToFav' onClick={handleAddToFavorites}>
            Add to Favorites
        </button>
    )
}

export default AddToFavorites
