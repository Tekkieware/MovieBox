import React, {useEffect, useState} from 'react'
import './style.scss'
import Header from '../../components/Header'
import MovieCard from '../../components/MovieCard'
import Footer from '../../components/Footer'
import { movies } from "../../models/models";
import axios from 'axios'

const Home: React.FC = () => {
  useEffect(() => {
    
    return () => {
        
    }
}, []);
  
  

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
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
      <Footer />
    </div>


  )
}

export default Home