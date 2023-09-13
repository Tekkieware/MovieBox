import React from 'react'
import './style.scss'
import Logo from '../../components/Logo'

const Details: React.FC = () => {
  return (
    <div className="container-fluid details-wrapper">
      <div className='row'>
        <div className='col-2 side-bar'>

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
          <div className='row m-4 watch-trailer text-center'>
            <span className='play'><img className='play-button p-3' src='/resource/play-icon.png' height={90} alt='play' /></span>
            <img src='/resource/watch-trailer.png' alt='watch trailer' className='trailer-image' height={350} />
          </div>
          <div className='row m-4 px-3'>
            <div className='col-10 movie-details'><span data-testid="movie-title">Top Gun: Maverick</span> • <span data-testid="movie-release-date">2022</span> • PG-13 • <span data-testid="movie-runtime">2h 10m</span><span className='mx-4'><button className='genre-tag mx-2'>Action</button><button className='genre-tag mx-2'>Drama</button></span></div>
            <div className='col-2 text-end'><span className='rate-score'><img src='/resource/star.png' height={30} alt='rating' />&nbsp;8.5</span><span className='rate-num'> | 350k</span></div>
          </div>
          <div className='row m-4 px-3'>
            <div className='col-8'>
              <div className='row'>
                <span className='movie-desc' data-testid="movie-overview">
                  After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.
                </span>
                <span className='movie-director my-2 py-1'>Director : <b className='directior-name'>Joseph Kosinski</b></span>
                <span className='movie-director py-1'>Writers : <b className='directior-name'>Jim Cash, Jack Epps Jr,  Peter Craig</b></span>
                <span className='movie-director movie-director-last py-1'>Stars : <b className='directior-name'>Tom Cruise, Jennifer Connelly, Miles Teller</b></span>

              </div>
              <div className='row py-3'>
                <span className='dropdown mx-2'><button className='top'>Top rated movie #65</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Awards 9 nominations<button className='drop-icon float-end'><img src="/resource/drop-icon.png" alt="dropdown" /></button></span>
              </div>

            </div>
            <div className='col-4 px-5 text-center'>
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
      </div>

    </div>
  )
}

export default Details