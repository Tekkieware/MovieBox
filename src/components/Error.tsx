import React from 'react'

const Error:React.FC<{ message: string }> = ({message}) => {
  return (
    <div className="alert alert-danger my-5" role="alert">
  {message}
</div>
  )
}

export default Error