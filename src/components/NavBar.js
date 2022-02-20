import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import { Link, useLinkClickHandler } from 'react-router-dom'
import { NavBarData } from './NavBarData';
import './NavBar.scss'


function Navbar() {

    const [nav, setNav] = useState(false)

    const showNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showNav} />
                </Link>
            </div>

            <nav className={nav ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showNav} >
                    <li>
                        <Link to='#' className='menu-bars' >
                            <FaIcons.FaOutdent/>
                        </Link>
                    </li>
                    
                    {NavBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>

                        )
                    })}
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
