import React from 'react'
import Button from '../ui/Button'

const Subscribe = () => {
  return (
    <div>
        <form className='flex flex-col lg:flex-row items-center gap-4 lg:gap-1'>
            <input type='email' className="outline-none py-2 w-80 rounded-md px-4 mr-2" placeholder='Enter your email...'/>
            <Button title="Subscribe"/>
        </form>
    </div>
  )
}

export default Subscribe