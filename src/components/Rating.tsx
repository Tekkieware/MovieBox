import React from 'react'

const Rating:React.FC<{vote: number}> = ({ vote }) => {
    return (
        <div className='row'>
            <div className='col-9'>
            <span className='imdb'><img height={15} src='/resource/imdb.png' alt='imdb' /></span><span className='card-rating p-2'>{vote*10}/100</span>
            </div>
            <div className='col-3 text-end'>
            <span className="imdb"><img height={15} src='/resource/apple.png' alt='imdb' /></span><span className='card-rating p-2'>{vote*10}%</span>
            </div>
           
     
        </div>
    )
}

export default Rating