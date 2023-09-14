import React, {useEffect, useState} from 'react'
import './style.scss'
import Header from '../../components/Header'
import MovieCard from '../../components/MovieCard'
import Footer from '../../components/Footer'
import { movies } from "../../models/models";
import axios from 'axios'

const Home: React.FC = () => {

  const [moviesList, setMoviesList] = useState<movies[]>([])
  const [isloading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const token: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTU0NzdlYjMyNmM2MzZkZGMxOWE2MGI5YjhmYTRiMSIsInN1YiI6IjY1MDA1NjZjZWZlYTdhMDEzN2QyNjA0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ZODOqwBK7ly-guNQC1wYAq2U1Ti4CTrS3hwNP35Qik"
  useEffect(() => {
    getMovies()
    return () => {} 
}, []);
  
async function getMovies() {
  setIsLoading(true)
  try {
    await axios.get(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',

        }
       }).then((response) =>{
            const {results} = response.data
            setMoviesList(results.splice(0, 10))
            console.log('status is: ', response.status);
          })
          ; 
      setIsLoading(false)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setIsLoading(false)
      setError(error.message)
    } else {
      setIsLoading(false)
      
      setError('An unexpected error occurred');
    }
  }
}


  return (
    <div className='home-wrapper'>
       
      
      <div className="container-fluid hero-section">
        <div className='container'>
          <Header />
          <div className='row py-5'>
            <div className='col-12 col-md-4 p-3'>
              <div className='row'>

                <span className='hero-text'>John Wick 3 : Parabellum</span>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <span className='imdb'><img height={15} src='/resource/imdb.png' alt='imdb' /></span><span className='rating p-2'>86.0/100</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="imdb"><img height={15} src='/resource/apple.png' alt='imdb' /></span><span className='rating p-2'>97%</span>
                </div>
              </div>
              <div className='row'>
                <div className='col-10'>
                  <p className='hero-description py-3'>
                    John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <button className='hero-button'><img src='/resource/hero-button.png' alt='watch trailer' />&nbsp;WATCH TRAILER</button>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
      <br />
      <div className='container py-5'>
        <div className='row'>
          <div className='col-8'>
            <span className='feature-title'>Featured Movies</span>
          </div>
          <div className='col-4 text-end'>
            <span className='see-more'>See more &nbsp;<img src='/resource/next-icon.png' alt='next' /></span>
          </div>

        </div>
        <div className='row'>
          
          <MovieCard moviesList = {moviesList} />
          
        </div>
      </div>
      <Footer />
    </div>


  )
}

export default Home