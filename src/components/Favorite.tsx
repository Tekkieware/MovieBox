import React, {useEffect, useState} from 'react'
import {BsFillSuitHeartFill} from 'react-icons/bs'


const Favorite:React.FC<{id: number}> = ({id}) => {

  const [isFavorite, setIsFavorite] = useState<boolean>(false)

function fave(id:number){
    setIsFavorite(!isFavorite)
}

  return (
    <div className='fav-icon text-center py-1' onClick={() => fave(id)}><BsFillSuitHeartFill style={{ color: `${isFavorite ? "#BE123C": "#D1D5DB" }`, fontSize: "1.1em" }} /></div>
  )
}

export default Favorite