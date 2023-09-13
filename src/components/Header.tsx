import React from 'react'

const Header = () => {
  return (
    <div className='row py-3'>
            <div className='col-6 col-md-3'>
                <span className='logo'><img src='/resource/logo.png' height={50} alt='logo' /></span><b className='logo-text p-3'>MovieBox</b>
            </div>
            <div className='col-md-6 d-none d-md-block text-center'>
                Search
            </div>
            <div className='col-6 col-md-3 text-end'>
                <b className='auth-text p-3'>Sign In</b><span className='auth'><img src='/resource/Menu.png' height={40} alt='logo' /></span>
            </div>
        </div>
  )
}

export default Header