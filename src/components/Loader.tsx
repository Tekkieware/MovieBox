import React from 'react'

const Loader:React.FC = () => {
  return (
    <div className='loader-container'><div className="loader float-end">
    <img width={40} src='/resource/logo.png' alt='logo' />
  </div></div>
  )
}

export default Loader