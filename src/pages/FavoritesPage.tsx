//FavoritesPage.tsx

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import CityCard from '../components/CityCard'
import '../styles/FavoritesPage.scss'
import HomeButton from '../components/HomeButton'

const FavoritesPage = () => {
    const favorites = useSelector((state: RootState) => state.favorites.list)

    return (
        <div className='favorites-page'>
            <h1>Favorites</h1>

            {favorites.map((city) => (
                <div key={city.id} className='favorite-city'>
                    <Link key={city.id} to={`/city/${city.id}`}>
                        <CityCard city={city} />
                    </Link>
                </div>
            ))}
            <HomeButton />
        </div>
    )
}

export default FavoritesPage