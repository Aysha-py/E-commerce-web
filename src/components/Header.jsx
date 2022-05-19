import React,{useState,useEffect} from "react";
import Collection from "../pages/Collection";
import {FaBars} from 'react-icons/fa';
import {FaRegWindowClose} from 'react-icons/fa';
import Mencollection from '../pages/Mencollection'
import Womencollection from '../pages/Womencollection';
import avatar from "../assets/img/avatar.png"
import cart from "../assets/img/cart.svg"


const Header =({setToggleBtn,toggleBtn,count,setCount})=>{

  
    const tabs =[
        {
            to: '/collection',
            name: 'collections'
        },
        {
            
            to: '/men',
            name: 'men'
        },
        {
          
            to: '/women',
            name: 'women'
        },
        {
          
            to: '/About',
            name: 'About'
        },
        {
          
            to: '/Contact',
            name: 'contact'
        },
    ]
    const [tab,setCurrentTab] =useState("collection")
    const [activeTab, setActiveTab] = useState(0);
    const [toggle,setToggle] =useState(false);
    const [result,setResult] =useState('collections' );
    const [width,setWidth] = useState(window.innerWidth)
    

        
      
      

  const showTab=(category)=>{
    
        setCurrentTab(category)
        setResult(category)
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

    const quantity =localStorage.getItem("count")
    console.log(quantity)
    const savedQuantity = JSON.parse(quantity)
    console.log(savedQuantity)
    if (savedQuantity){
        setCount(savedQuantity)
    }


return(
 
    <div>
        <div id="container">
            <div className ="Grid">
                <div className ="logo"  >
                   <button id="logo-btn" disabled={toggleBtn}  onClick={handleToggle}>{toggle? <FaRegWindowClose  size={30}/>:<FaBars size={30}/>}</button>
                    <h2 onClick={move}>Sneakers</h2> 
                </div>
            
               
                <div className ="tabs" id="dropdown">
                    
                    {toggle ? tabs.map((category,i)=>(
                        <ul>
                           <li key={i} className={activeTab === i ? "btn-case active" : "btn-case"} 
                         onMouseClick={()=>{
                          showTab(category.name)
                         setActiveTab(i)
                        }}>{category.name}</li>
                        </ul>
                    
                    )): width>=601 && tabs.map((category,i)=>(
                        <ul>
                        <li key={i} className={activeTab === i ? "btn-case active" : "btn-case"} 
                                onClick={()=>{
                                showTab(category.name)
                                setActiveTab(i)
                        }}>{category.name}</li> 
                        </ul>
                    
                    ))
                    } 
                    
                </div>
                
            </div>
            


            <div className="checkout">
                <div className="checkout-counter">
                    <img src={cart} alt="avatar" />
                    <div className="hero">{quantity}</div>
                </div> 
                <div className="profile-photo">
                   <img src={avatar} alt="avatar" />
                </div> 
              
                   
            </div>

           
            
        </div>
        <hr/>
        {result === "collections" && <Collection setToggleBtn={setToggleBtn} toggleBtn={toggleBtn}/>}
        {result === "men" && <Mencollection/>}
        {result === "women" && <Womencollection/>}
        {result === "contact" && "hhhhhhhhhhhhh"}
    </div>
   
                    
    )
}

export default Header
