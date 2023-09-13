import React from 'react'
import './style.scss'
import Logo from '../../components/Logo'

const Details: React.FC = () => {
  return (
    <div className="container-fluid details-wrapper">
      <div className='row'>
        <div className='col-2 side-bar'>
        <div className='container-fluid'>
          <div className='row py-5'>
            <Logo />
          </div>
          <div className='row py-5'>
            <span className='side-bar-text mx-4'><img src='/resource/home-icon.png' alt='home' />&nbsp;Home</span>
          </div>
        </div>
        </div>
        <div className='col-md-10'>
        <h1>Moviebox</h1> 
        </div>
      </div>
      
    </div>
  )
}

export default Details