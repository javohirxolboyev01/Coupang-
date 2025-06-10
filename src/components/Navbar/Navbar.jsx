import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='bg-white shadow-md'>
    <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
      <div className='text-lg font-bold '>
        <Link to= "/">
        <img src="//static.coupangcdn.com/image/static/login/logo-coupang.x2.20201201.png" width="130px" height="20px" alt="coupang"/>
        </Link>
      </div>
      <div className='relative flex-1 left-0 mx-4 '>
        <form>
          <input type='text' placeholder='Search' 
          className='w-full border-2 border-[#4285f4] py-2 px-4 rounded-[6px]'
          />
          <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
        </form>
      </div>
      <div className='flex items-center space-x-4'>
        <Link to={"/cart"}>
        <FaShoppingCart className='text-lg'/>
        </Link>
        <button className='hidden md:block'>Sign | Register</button>
        <button className='block md:hidden'> 
          <FaUser/>
        </button>
      </div>
    </div>
    <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
      <NavLink to="/" className="hover:underline">Home</NavLink>
      <NavLink to="/shop" className="hover:underline">Shop</NavLink>
      <NavLink to="/contact" className="hover:underline">Contact</NavLink>
      <NavLink to="/about" className="hover:underline">About</NavLink>
    
    </div>
   </nav>
  )
}

export default Navbar
