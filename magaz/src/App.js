import Futer from './component/Futer/Futer';
import './App.css'

import {useDispatch } from "react-redux"
import Sidebar from './component/Sidebar/Sidebar';
import Heder from './component/heder/heder';
import { useEffect } from 'react';
import { getCategoris } from './redux/categorisSlis';
import { getProducts } from './redux/productSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategoris());
    dispatch(getProducts());
  }, [dispatch])
  return (
    <div className="App">
       <Heder />
        <Sidebar/>
       
       <Futer/>
    </div>
  );
}

export default App;
