import React from 'react'
import unionLogo from '../../../assets/Union1.svg'
import './emptyRepo.scss'


const EmptyRepo = () => {
   return (
      <div className="emptyrepo">
         <div className="emptyrepo__container">
            <div className="emptyrepo__logo">
               <img src={unionLogo} alt="" className='emptyrepo__logo-img' />
            </div>
            <span className="emptyrepo__text">
            Repository list is empty
            </span>
         </div>
      </div>
   )
}

export default EmptyRepo
