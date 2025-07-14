import React from 'react'
import {Logo} from '../images'

const Nav = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-none">
         <div className="container-fluid">
           
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
               <a className="nav-link" href="#">Shop Products</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">Blog</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">FAQ</a>
             </li>
           </ul>
     
           
           <img src={Logo} className="navbar-brand mx-auto" alt="#" >
             
           </img>
     
           
           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             <li className="nav-item">
               <a className="nav-link" href="#">About Us</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">Contact</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#"><i className="bi bi-search"></i></a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#"><i className="bi bi-person"></i></a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#"><i className="bi bi-heart"></i></a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#"><i className="bi bi-cart"></i></a>
             </li>
           </ul>
         </div>
       </nav> 
    </>
  )
}

export default Nav
