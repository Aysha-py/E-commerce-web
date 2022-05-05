import React,{useState,useEffect} from "react";
import Collection from "../pages/Collection";
import {FaCartArrowDown} from 'react-icons/fa';
import {FaBars} from 'react-icons/fa';
import {FaRegWindowClose} from 'react-icons/fa';
import Mencollection from '../pages/Mencollection'
import Womencollection from '../pages/Womencollection';
import avatar from "../assets/img/avatar.png"
import cart from "../assets/img/cart.svg"


const Header =({selectedAsset,setSelectedAsset})=>{
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

return(
 
    <div>
        <div id="container">
            <div className ="Grid">
                <div className ="logo"  >
                   <button id="logo-btn"  onClick={handleToggle}>{toggle? <FaRegWindowClose  size={30}/>:<FaBars size={30}/>}</button>
                    <h2 onClick={move}>Sneakers</h2> 
                </div>
            
               
                <div className ="tabs" id="dropdown">
                
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
                <img src={cart} alt="avatar" />
                <div className="count">5</div>
                </div> 
                <div className="profile-photo">
                   <img src={avatar} alt="avatar" />
                </div> 
                   
            </div>
            
            
        </div>
        <hr/>

            {tab  === "collections" && <Collection toggle={toggle} setToggle={setToggle}/>}
            {tab  === "men" && <Mencollection selectedAsset={selectedAsset} />}
            {tab  === "women" && <Womencollection />}
            
    </div>
   
                    
    )
}

export default Header
