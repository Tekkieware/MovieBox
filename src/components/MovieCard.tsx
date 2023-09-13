import React from 'react'
import Rating from './Rating'

const MovieCard = () => {
    return (
        <><div className='col-md-3 movie-card py-5'>
            <img src="/resource/card-img.png" className="card-img-top" alt="..." />
            <p className='py-3 movie-country'>USA, 2016 - Current</p>
            <p className='movie-title'>Stranger things</p>
            <Rating />
            <p className='py-3 movie-genre'>Action, Adventure, Horror</p>
        </div></>
    )
}

export default MovieCard