import React from 'react'
import { useDispatch, useSelector } from 'react-redux';



const UserPage = () => {
   const users = useSelector(state=>state.users.userItems)

   return (
      <div className="userpage">
         <div className="container">
            <div className="userinfo">
               <div className="user-info__avatar">
                  <img src={users.avatar_url} alt="Avatar" />
               </div>
               <div className="userinfo__nickname">
                  {users.name}
               </div>
               <div className="user_info__link">
                  <a href="">{users.html_url}</a>
               </div>
               <div className="userinfo__folowers">
                  65 folowers
               </div>
            </div>
            <div className="repoinfo">
               <div className="repoinfo__count">repositories (249)</div>
               <div className="repoinfo__cards">
                  <ul>
                     <li>1</li>
                     <li>2</li>
                     <li>3</li>
                     <li>4</li>
                     <li>5</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default UserPage
