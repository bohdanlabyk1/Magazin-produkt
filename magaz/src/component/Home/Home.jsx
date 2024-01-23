import React from 'react'
import Hompage from './hompage/Hompage'
import Product from '../products/Product'
import { useSelector } from 'react-redux'



const Home = () => {
  const {list } = useSelector(({products})=> products )
  return (
  <>
   <Hompage/>
   <Product products={list}/>
  </>
  )
}

export default Home