import React,{useState,useEffect} from "react";
import Collection from "../pages/Collection";
import {FaCartArrowDown} from 'react-icons/fa';
import {FaUserCircle} from 'react-icons/fa';
import {FaBars} from 'react-icons/fa';
import {FaRegWindowClose} from 'react-icons/fa';
import Mencollection from '../pages/Mencollection'
import Womencollection from '../pages/Womencollection'
import CheckoutModal from "./CheckoutModal";




const Header =()=>{


    const tabs =["collections","men","women","About","contact"]

    const [tab,setCurrentTab] =useState("collections")
    const [activeTab, setActiveTab] = useState(0);
    const [toggle,setToggle] =useState(false)
    const [width,setWidth] =useState(window.innerWidth)
  
  const showTab=(category)=>{
    
        setCurrentTab(category)
       console.log(category)
    }
    const handleToggle=()=>{
        
        setToggle(prev =>!prev)
    }

    const updateDimension=()=>{
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize",updateDimension);
        return()=>
        window.removeEventListener("resize,updateDimension");
    },[])
  

    const move =()=>{
        setCurrentTab("collections")   
    }
 // <Link to="/men" style={{textDecoration:"none"}}>
return(
 
    <div>
        <div id="container">
            <div className ="Grid">
                <div className ="logo">
                   <button onClick={handleToggle}>{toggle? <FaRegWindowClose size={30}/>:<FaBars size={30}/>}</button>
                   
                      <h1 onClick={move}>Sneakers</h1> 
                
            </div>
               
            
               
                <div className ="tabs">
                
                    {toggle ? tabs.map((category,i)=>(
                        <ul>
                            <li key={i} className={activeTab === i ? "btn-case active" : "btn-case"} 
                         onMouseClick={()=>{
                          showTab(category)
                         setActiveTab(i)
                        }}>{category}</li>
                        </ul>
                    
                    )): width>=601 && tabs.map((category,i)=>(
                        <ul>
                            <li key={i} className={activeTab === i ? "btn-case active" : "btn-case"} 
                                onClick={()=>{
                                showTab(category)
                                setActiveTab(i)
                        }}>{category}</li>
                        </ul>
                    
                    ))
                    }
                </div>
            
            </div>
            


            <div className="checkout">
                <div>
                    <FaCartArrowDown className="icon"/>
                </div> 
                <div>
                    <FaUserCircle className="icon"/>
                </div> 
                   
            </div>
            
            
        </div>

            {tab  === "collections" && <Collection />}
            {tab  === "men" && <Mencollection />}
            {tab  === "women" && <Womencollection />}
           

    </div>
        
                    
    )
}

export default Header