import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavItem from './Sections/NavItem';
// import logo from './../../assets/img/logo.png';

const NavBar = () => {
    const [ menu, setMenu ] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <nav className='w-full fixed  z-10 text-lg p-3 bg-white/70 backdrop-blur-md shadow-md ' >
            <div className='w-full'>
                <div className=' flex items-center justify-between mx-auto w-9/12'>
                    {/* logo */}
                    <div className='flex items-center text-2xl h-14 font-black bg-gray-200 w-30 '>
                        <Link to="./" className='text-4xl '>DALYECLO</Link>  
                        {/* <img className='w-16 h-10' src={logo} alt="logo" /> */}
                    </div>
                    {/* menu button */}
                    <div className='text-5xl sm:hidden justify-end'>
                        <button onClick={handleMenu}>{menu ? "-" : "+" }</button>
                    </div>
                    {/* big screen nav-itmes */}
                    <div className='hidden sm:block  '>
                        <NavItem />
                    </div>
                </div>
                
                {/* small screen nav-itmes */}
                <div className='block sm:hidden'>
                    {menu && <NavItem mobile/>}
                </div>

            </div>
        </nav>
    )
}

export default NavBar