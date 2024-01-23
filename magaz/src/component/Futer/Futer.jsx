import React from 'react'
import './futer.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Futer = () => {
  return (
    <footer>
      <div className="logo">Ваш логотип</div>
      <p>Надпис у футері</p>
      <div className="social-icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
    </footer>
  )
}

export default Futer