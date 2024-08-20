import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-center  pr-7 pl-7 pt-7 bg-black'>
        <div className=' pr-56'>
        <a href='/'>
      <h2  className='text-white'><span className='text-blue-400'>Football-</span>Legues</h2>

      </a>
        </div>
      
      <div className='flex items-center'>
      <ul className='flex text-white justify-center'>
                <li className='pr-6 '>
                    <a href="/leagues">Leagues</a>
                </li>
                <li className='pl-6 '>
                    <a href="/standing">Standing</a>
                </li>
            </ul>
      </div>
        
  
    </nav>
  )
}

export default NavBar