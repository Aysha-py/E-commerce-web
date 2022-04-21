import React,{useState} from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import CheckoutModal from './CheckoutModal';

const CheckoutBtn = ({count,discountedprice,title,show,setShow}) => {
    
    const [totalItem,setTotalItem]= useState([]) 
    const [toggle,setToggle] =useState(true)

    const handleShow=()=>{
        setTotalItem(console.log(count))
        setShow(console.log(show))
    }
    
 
  return (
    <>
   
    <div style={{textAlign:"center" ,marginTop:"5px" }}onClick={handleShow} >
        
      <Button startIcon={<AddShoppingCartIcon size={40} /> } ></Button >
      <h3 style={{display:"inline", color:"white"}}>Add To Cart</h3>

    </div>
    
    <div className='checkoutzz'>
        <h2>Cart</h2>
      <div className='checkout-details'> 
        <img src={"img"} alt="" />
        <div>
          <h3>{title}</h3>
          <h3>{`$${discountedprice} X`} {count}</h3>

        </div>
      </div>
      <button >Submit</button>
    </div>
    
    </>
    
  )
}

export default CheckoutBtn