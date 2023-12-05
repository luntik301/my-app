//CityCard.tsx

import React from 'react'
import '../styles/CityCard.scss'

interface CityCardProps {
    city: {
        id: number
        name: string
        country: string
        population: number
    }
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
    return (
        <div className='city-card'>
            <h2>{city.name}</h2>
            <p>Country: {city.country}</p>
            <p>Population: {city.population}</p>
        </div>
    )
}

export default CityCard