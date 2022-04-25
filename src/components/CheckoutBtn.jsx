import React,{useState} from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';


const CheckoutBtn = ({count,discountedprice,title,setInitialimg}) => {
    console.log(setInitialimg)
 
    const [show,setShow]= useState(false)

    const handleShow=()=>{
      if (!show) {
        setShow(true)  
      } else {
        setShow(false)  
      }
    
    }
   
 

  return (
    <>
 
    <div style={{textAlign:"center" ,marginTop:"5px" }}onClick={handleShow} >
        
      <Button startIcon={<AddShoppingCartIcon size={40} /> } ></Button >
      <h3 style={{display:"inline", color:"white", width:"100px"}}>Add To Cart</h3>

    </div>
    <form className='for'>
    
      {show===true && count!==0 && <div className='checkoutzz'>
        <h2>Cart</h2>
      <div className='checkout-details'> 
          <img src={setInitialimg} alt="" />
          <div className='checkout-total'>
            <h3>{title}</h3>
          <div className='total'>
            <h3>{`$${discountedprice} X`} {count}</h3>
            <h3>{`$${discountedprice * count}`}</h3>
          </div>
        </div>
        <button type='submit'>Checkout</button>
      </div>
  
</div>
  }
  {show===true && count===0 && <div className='checkoutzz'>
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