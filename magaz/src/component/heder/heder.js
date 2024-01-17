import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import './heder.css'
const Heder = () => {
  return (
    <header className="header">
    <div className="logo">Logo</div>
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