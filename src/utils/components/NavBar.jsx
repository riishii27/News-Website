import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <div className='flex z-10 fixed bg-black text-white w-full left-0 top-0 items-center text-2xl  justify-center h-24'>
        <Link to='/'  className='p-5 mr-96 '> <AiFillHome /></Link>
        <Link to='/Crime' className='p-5'>Crime</Link>
        <Link to='/sports' className='p-5' >Sports</Link>
        <Link to='/celebrity' className='p-5'>Celebrity</Link>
        <Link to='/Trending' className='p-5'>Trending</Link>
        <Link to='/politics' className='p-5' >Politics</Link>
        <Link to='/latest' className='p-5' >Latest</Link>
      </div>
    </div>
  )
}

export default NavBar
