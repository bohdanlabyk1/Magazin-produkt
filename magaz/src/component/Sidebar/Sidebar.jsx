import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import {  NavLink } from 'react-router-dom'

const Sidebar = () => {
  const {list} = useSelector(({categoris})=> categoris);

  console.log('list', DOMRectList)
  
  return (
    <div className='content'>
      <div className='main'>
        <div> Categoris
        <div className='list'>
        {list.map(({ id, name }) => (
      <li key={id}>
        <NavLink className='link' to={`/categoris/${id}`}>{name}</NavLink>
      </li>
    ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar