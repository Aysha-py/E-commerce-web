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
        else if(!show && width<=600){
          setToggle()
        
          document.getElementById("dropdown").style.display  ='none';
          console.log("hey")
             
        }
        else{
          console.log("redo")
        }
    }

  
    const deleteItem=()=>{
      setCount(count-1)

    }
  

  return (
    <>
 
    <div id='checkoutIcon'>
        
    {spin ?  <Spinner animation="border" />
      :
    <>
    <Button style={{color:"white"}} startIcon={<AddShoppingCartIcon size={40}  onClick={handleShow}/> }></Button >
    <h6 style={{display:"inline", color:"white"}}>Add To Cart</h6>
    </>
     
    }
      
      
    </div>
    <form className='for'>
    
      {show && count!==0 && <div className='checkoutzz'>
        <h2>Cart</h2>
        
      <div className='checkout-details'> 
          <img src={setInitialimg} alt="" />
          
          <div className='checkout-total'>
            <h3>{title}</h3>
          <div className='total'>
            <h3>{`$${discountedprice}.00 X`} {count}</h3>
            <h3 className='cashout-price' style={{fontWeight:"bolder"}}>{`$${discountedprice * count}.00`}</h3>
            <div className='trash'>
              
              <FaRegTrashAlt size={15} onClick={deleteItem}/>
            </div>
            
          </div>
          
        </div>
        <button type='submit'>Checkout</button>
      </div>
  
</div>
  }
  {show && count===0 && <div className='checkoutzz'>
  <h2 >Cart</h2>
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