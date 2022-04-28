import React,{useState,useEffect} from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import { FaRegTrashAlt} from "react-icons/fa";
import { Spinner } from 'react-bootstrap';


const CheckoutBtn = ({count,discountedprice,title,setInitialimg,setCount,toggle,setToggle}) => {

    const [show,setShow]= useState(false)
    const[spin,setSPin] =useState(false)

    let width = window.innerWidth
    console.log(width)
    const handleShow=()=>{
        if (!show) {
          setSPin(true)
          setTimeout(() => {
            setShow(true)
            setSPin(false)
          }, 3000)
          setToggle(false)
          
        }
        else if(show && width<=600){
          setToggle(true)
          setShow(true)
            document.getElementById("dropdown").style.display  = 'none';
            console.log("hey")
             
        }
        else{
          setShow(false)
         
        }
    }

  
    const deleteItem=()=>{
      setCount(count-1)

    }
  

  return (
    <>
 
    <div  >
        
      <Button startIcon={<AddShoppingCartIcon size={40} onClick={handleShow}/> } ></Button >
      <h3 style={{display:"inline", color:"white"}}>Add To Cart</h3>
      {spin&&<Spinner animation="border" />}
      
   

      

    </div>
    <form className='for'>
    
      {show && count!==0 && <div className='checkoutzz'>
        <h2>Cart</h2>
      <div className='checkout-details'> 
          <img src={setInitialimg} alt="" />
          <div className='checkout-total'>
            <h3>{title}</h3>
          <div className='total'>
            <h3>{`$${discountedprice} X`} {count}</h3>
            <div className='trash'>
              <h3>{`$${discountedprice * count}`}</h3>
              <FaRegTrashAlt size={15} onClick={deleteItem}/>
            </div>
            
          </div>
          
        </div>
        <button type='submit'>Checkout</button>
      </div>
  
</div>
  }
  {show && count===0 && <div className='checkoutzz'>
  <h2>Cart</h2>
    <div className='checkout-total'>
      <h3>This cart is empty</h3>
    </div>
  </div>
  }
  
    
    </form>
        

    </>
    
  )
}

export default CheckoutBtn