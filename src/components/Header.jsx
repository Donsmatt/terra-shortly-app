import React, { useState } from 'react'
import Button from './Button'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen(p => !p);

  return (
    <div className='header'>
        <div className='header__content'>
            <div>
                <span className='logo'>Shortly</span>
            </div>
            <div>
                <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
                    <a className='nav__item' href={"/"}>Features</a>
                    <a className='nav__item' href={"/"}>Pricing</a>
                    <a className='nav__item' href={"/"}>Resources</a>
                    <div className='nav__button__container'>
                        <a href={"/"}>
                            Login
                        </a> 
                        <Button label="Sign Up"/>
                    </div>
                </nav>
            </div>
            <div>
                <div className='header__button__container'>
                    <a>Login</a>
                    <Button label="Sign Up"/>
                </div>
                <button className='header__toggler' onClick={menuToggler}>
                    {!menuOpen ? <GiHamburgerMenu/> : <AiOutlineCloseSquare/>}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header