import React,{useState} from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Collection from './pages/Collection'; 
import Mencollection from './pages/Mencollection'; 
import Womencollection from './pages/Womencollection'; 
import CheckoutBtn from './components/CheckoutBtn'; 




function App() { 
  
  
  const [toggleBtn,setToggleBtn] = useState(false)
  const [count,setCount] =useState(0)

   
  
  return (
   <div>  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header setToggleBtn={setToggleBtn} toggleBtn={toggleBtn} count={count} setCount={setCount} /> }>
      <Route path="/mencollection" element={<Mencollection  />}/>
      <Route path="/womencollection" element={<Womencollection  />}/>
        <Route path="/collection" element={<Collection/>}  count={count} setCount={setCount} /> 
        <Route path="/checkoutBtn" element={<CheckoutBtn setToggleBtn={setToggleBtn} toggleBtn={toggleBtn}/> } /> 
      </Route>
    </Routes>
  </BrowserRouter>
   </div>
    
  );
}

export default App;
