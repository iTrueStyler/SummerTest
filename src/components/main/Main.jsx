import React from 'react'
import "./main.scss"
import searchLogo from '../../assets/find.svg'
const Main = () => {
   return (
      <div className="main">
         <div className="main__container">
            <div className="main__logo">
               <img src={searchLogo} alt="" className='main__logo-img' />
            </div>
            <div className="main__text">
            Start with searching
            a GitHub user
            </div>
         </div>
      </div>
   )
}

export default Main
