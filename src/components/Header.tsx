import React from 'react'
import Logo from './Logo'

const Header = () => {
    return (
        <div className='row py-3'>
            <div className='col-6 col-md-3'>
                <Logo />
            </div>
            <div className='col-md-6 d-none d-md-block text-center'>
                <div className="has-search mx-lg-5 px-lg-3">
                    <div className="form-control-feedback"><img src='/resource/search.png' alt='search' /></div>
                    <input type="text" className="search-box" placeholder="What do you want to watch?" />
                </div>
            </div>
            <div className='col-6 col-md-3 text-end'>
                <b className='auth-text p-3'>Sign In</b><span className='auth'><img src='/resource/Menu.png' height={40} alt='logo' /></span>
            </div>
        </div>
    )
}

export default Header