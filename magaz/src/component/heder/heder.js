import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import './heder.css'
import {Link} from 'react-router-dom'
import { ROUTER } from '../../utils/router';
const Heder = () => {
  return (
    <header className="header">
    <Link to={ROUTER.Home}>
    $TUFF
    </Link>
    
    <div className="search-bar">
      <input type="text" placeholder="Пошук" />
    </div>
    <div className="auth-icon">
     <FaRegUserCircle />
     <AiTwotoneDelete />
    </div>
  </header>
  )
}

export default Heder