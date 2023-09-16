import React, {useEffect, useState} from 'react'
import {BsFillSuitHeartFill} from 'react-icons/bs'


const Favorite:React.FC<{id: number}> = ({id}) => {

  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  useEffect(()=>{
    console.log(isFavorite)
}, [isFavorite])

  return (
    <div className='fav-icon text-center py-1' onClick={() => setIsFavorite(!isFavorite)}><BsFillSuitHeartFill style={{ color: `${isFavorite ? "#BE123C": "#D1D5D" }`, fontSize: "1.1em" }} /></div>
  )
}

export default Favorite