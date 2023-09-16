import React,{useEffect, useState} from 'react'
import Rating from './Rating'
import Favorite from './Favorite'
import { movies } from '../models/models'
import { Link } from 'react-router-dom'





type movieArray = movies[]
const MovieCard: React.FC<{ moviesList: movieArray }> = ({ moviesList }) => {   
  
   
    return (
        <>
        {moviesList.map((movie)=>(
              
            <div className='col-md-3 movie-card py-5' key={movie.id} data-testid="movie-card">
                <Favorite id={movie.id} />
                <img data-testid="movie-poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="card-img-top" alt="..." />
                <p className='py-3 movie-country'>USA, <span data-testid="movie-release-date">{movie.release_date.slice(0,4)}</span></p>
                <Link className='link' to={`/movies/${movie.id}`}><p className='movie-title' data-testid="movie-title">{movie.title}</p></Link>
                <Rating vote={movie.vote_average} />
                <p className='py-3 movie-genre'>Action, Adventure, Horror</p>
            </div>

            ))}
        </>
    )
}

export default MovieCard