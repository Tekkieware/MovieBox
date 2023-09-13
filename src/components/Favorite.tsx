import React from 'react'
import {BsFillSuitHeartFill} from 'react-icons/bs'

const Favorite:React.FC = () => {
  return (
    <div className='fav-icon text-center py-1'><BsFillSuitHeartFill style={{ color: "#D1D5DB", fontSize: "1.1em" }} /></div>
  )
}

export default Favorite