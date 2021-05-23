import React from 'react'
import "./header.scss"
import logo from '../../assets/octocat.svg'

const Header = () => {
   return (
      <div className='header'>
         <div className="header__container">
         <div className="header__logo">
            <img src={logo} alt="" />
         </div>
         <div className="header__input">
            <input  type="text" placeholder='Enter GitHub username' className='header__input-input'/>
         </div>
         </div>

      </div>
   )
}

export default Header
