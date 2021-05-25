import React from 'react'
import "./errorPage.scss"
import unionLogo from '../../../assets/Union.svg'


const ErrorPage = () => {
   return (
      <div className="errorpage">
         <div className="errorpage__container">
            <div className="errorpage__logo">
               <img src={unionLogo} alt="" className='errorpage__logo-img' />
            </div>
            <span className="errorpage__text">
            User not found ;c
            </span>
         </div>
      </div>
   )
}

export default ErrorPage
