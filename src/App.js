import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Collection from './pages/Collection';
import Womencollection from './pages/Womencollection'
import Mencollection from './pages/Mencollection'
import CheckoutBtn from './components/CheckoutBtn';


function App() {

   
  const [selectedAsset,setSelectedAsset] = useState(false);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header setSelectedAsset={setSelectedAsset } selectedAsset={selectedAsset} />}  exact/>
        <Route path="/collection" element={<Collection setSelectedAsset={setSelectedAsset } selectedAsset={selectedAsset} exact/>}/>
        <Route path="/men" element={<Mencollection/>}/>
        <Route path="/women" element={<Womencollection/>}/>
        <Route path="/checkout" element={<CheckoutBtn setSelectedAsset={setSelectedAsset} selectedAsset={selectedAsset} />}/>
      </Routes>
    
    </Router>
    
    
  );
}

export default App;
