
import Futer from './component/Futer/Futer'
import Heder from './component/heder/heder'
import Hompage from './component/Home/Home'
import { getCategoris } from './redux/categorisSlis';
import { getProducts } from './redux/productSlice';
import {useDispatch } from "react-redux"
import { useEffect } from 'react';



function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(getCategoris())
   dispatch(getProducts())
  }, [dispatch])
  return (
    <div className="App">
  
       <Heder />
       <Hompage/>
       <Futer/>
    </div>
  );
}

export default App;
