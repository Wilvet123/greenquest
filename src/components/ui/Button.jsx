import React from 'react'

const Button = ({title}) => {
  return (
    <button className='px-5 py-2 shadow-lg inline  bg-green-800 rounded-md text-white text-center'>
        {title}
    </button>
  )
}

export default Button