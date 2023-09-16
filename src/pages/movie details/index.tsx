import React, {useState, useEffect} from 'react'
import './style.scss'
import {useNavigate, useParams} from 'react-router-dom'
import Logo from '../../components/Logo'
import axios, {AxiosResponse} from 'axios'
import {movie} from '../../models/models'
import DetailLoader from '../../components/DetailLoader'
import Error from '../../components/Error'


const Details: React.FC = () => {
  
  const [isloading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [currentMovie, setCurrentMovie] = useState<movie>()
  const [date, setDate] = useState<any>("")
  const {id} = useParams()
  const token: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTU0NzdlYjMyNmM2MzZkZGMxOWE2MGI5YjhmYTRiMSIsInN1YiI6IjY1MDA1NjZjZWZlYTdhMDEzN2QyNjA0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ZODOqwBK7ly-guNQC1wYAq2U1Ti4CTrS3hwNP35Qik"
 
  useEffect(()=>{
    getMovie(Number(id))
  }, [])  

  
 

 function getMovie(id:number) {
    
      setIsLoading(true)
      axios.get<movie>(
        `https://api.themoviedb.org/3/movie/${id}`, {
          headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json',

          }
         }).then((response) =>{  
              setCurrentMovie(response.data)
              setDate(currentMovie?.release_date)
              setError("")
              setIsLoading(false)
            }).catch(function (error) {
              if (error.response) {
                setIsLoading(false)
                const{status_message} = error.response.data;
                setError(status_message)
                
              } else if (error.request) {
                setIsLoading(false)
                setError("An unexpected error occurred");
              } else {
                setIsLoading(false)
                setError( "An unexpected error occurred");
              }
            });
            ; 
          
  }
  


  return (
    <div className="container-fluid details-wrapper">
      <div className='row d-block d-md-none text-center'>
        <div className='mt-4'> <span><Logo /></span></div>
        
      </div>
      <div className='row'>
        <div className='col-2 side-bar d-none d-md-block'>

          <div className='row py-5 text-center'>
            <Logo />
          </div>
          <div className='row py-4 px-5'>
            <span className='side-bar-text'><img src='/resource/home-icon.png' alt='home' />&nbsp;&nbsp;&nbsp;Home</span>
          </div>
          <div className='row py-4 px-5 active-bar'>
            <span className='side-bar-text-active'><img src='/resource/movies-icon.png' alt='home' />&nbsp;&nbsp;&nbsp;Movies</span>
          </div>
          <div className='row py-4 px-5'>
            <span className='side-bar-text'><img src='/resource/tv-icon.png' alt='home' />&nbsp;&nbsp;&nbsp;TV Series</span>
          </div>
          <div className='row py-4 px-5'>
            <span className='side-bar-text'><img src='/resource/calender-icon.png' alt='home' />&nbsp;Upcoming</span>
          </div>
          <div className='row m-4 pt-4 px-2 action-card'>
            <span className='action-title'>Play movie quizes and earn free tickets</span>
            <span className='action-text'>50k people are playing now</span>
            <span className='text-center py-4'><button className='action-button'>Start playing</button></span>
          </div>
          <div className='row py-4 px-5'>
            <span className='side-bar-text'><img src='/resource/logout-icon.png' alt='home' />&nbsp;&nbsp;&nbsp;Log out</span>
          </div>
        </div>

        <div className='col-md-10'>
          {isloading?
          <div className='row'><DetailLoader /></div>
          :error?
            <Error message={error} />
          :
          <div>
            <div className='row m-4 watch-trailer text-center'>
            <span className='play'><img className='play-button p-3' src='/resource/play-icon.png' height={90} alt='play' /></span>
            <img src={`https://image.tmdb.org/t/p/original${currentMovie?.backdrop_path}`} alt='watch trailer' className='trailer-image' height={350} />
          </div>
          <div className='row m-4 px-3'>
            <div className='col-md-10 movie-details'><span data-testid="movie-title">{currentMovie?.title}</span> • <span data-testid="movie-release-date">{new Date(date).toUTCString()}</span> • <span data-testid="movie-runtime">{currentMovie?.runtime}</span><span>mins</span><span className='mx-4'>{currentMovie?.genres.map((genre)=><button key={genre.id} className='genre-tag mx-1'>{genre.name}</button>)}</span></div>
            <div className='col-md-2 text-end'><span className='rate-score'><img src='/resource/star.png' height={30} alt='rating' />&nbsp;{currentMovie?.vote_average.toString().slice(0,3)}</span><span className='rate-num'> | {currentMovie?.vote_count.toString().slice(0,2)}k</span></div>
          </div>
          <div className='row m-4 px-3'>
            <div className='col-md-8'>
              <div className='row'>
                <span className='movie-desc' data-testid="movie-overview">
                  {currentMovie?.overview}
                  </span>
                <span className='movie-director my-2 py-1'>Languages Spoken : {currentMovie?.spoken_languages.map((language, id)=><b key={id} className='directior-name'>{language.name} | </b>)}</span>
                <span className='movie-director py-1'>Production Companies : {currentMovie?.production_companies.map((company)=><b key={company.id} className='directior-name'>{company.name} | </b>)}</span>
                <span className='movie-director movie-director-last py-1'>Production Countries : {currentMovie?.production_countries.map((country,id)=><b key={id} className='directior-name'>{country.name} | </b>)}</span>

              </div>
              <div className='row py-3'>
                <span className='dropdown mx-2'><button className='top'>Top rated movie #65</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Awards 9 nominations<button className='drop-icon float-end'><img height={20} src="/resource/drop-icon.png" alt="dropdown" /></button></span>
              </div>

            </div>
            <div className='col-md-4 px-md-5 text-center'>
              <div className='row'>
                <span className='showbutton'><img src='/resource/ticket-icon.png' alt='tickets' />&nbsp;See Showtimes</span>
              </div>
              <div className='row py-2'>
                <span className='showbutton2'><img src='/resource/list-icon.png' alt='tickets' />&nbsp;More watch options</span>
              </div>
              <div className='row py-2 more-image-holder'>
                <span className='more-image-title'><img src='/resource/list-icon2.png' alt='tickets' />&nbsp;The Best Movies and Shows in September</span>
                <img className='more-image' src='/resource/more-movies.png' alt='more movies' />
              </div>
            </div>
          </div>
          </div>
        }

          
          
        </div>
      </div>
    </div>
  )
}

export default Details