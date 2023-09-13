import React from 'react'

const Footer:React.FC = () => {
  return (
    <div className='container footer text-center'>
        <div className='row'>
         <span><img className='p-4' src="/resource/facebook.png" alt="" /><img className='p-4' src="/resource/instagram.png" alt="" /><img className='p-4' src="/resource/twitter.png" alt="" /><img className='p-4' src="/resource/youtube.png" alt="" /></span> 
        </div>
        <div className='row mt-2 mb-4'>
         <span><b className='p-4 footer-links'>Conditions of Use</b><b className='p-4 footer-links'>Privacy & Policy</b><b className='p-4 footer-links'>Press Room</b></span> 
        </div>
        <div className='row mt-4 mb-5'>
         <span className='footer-copyright mb-4'>© 2021 MovieBox by Adriana Eka Prayudha</span> 
        </div>
      </div>
  )
}

export default Footer