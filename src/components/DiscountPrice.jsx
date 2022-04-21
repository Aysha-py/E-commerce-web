import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckoutBtn from './CheckoutBtn';



const DiscountPrice = ({title,setInitialimg}) => {
  

  const [originalprice,setOriginalPrice] = useState(50000)
  const [discountedprice,setDiscountedPrice] = useState(0)
  const [percentage,setPercentage] =useState(50)
  const [count,setCount] =useState(0)

  


  useEffect(() => {
    if (originalprice && percentage ) {
      const per = ((percentage) /100)* originalprice ;
      const remainder = originalprice-per 
     setDiscountedPrice(remainder);
    }  
  }, [originalprice,percentage ])
 
  const increament=()=>{
    setCount(count+1) 
    setOriginalPrice(originalprice)
  }
  const decreament=()=>{
    setCount(count-1) 
    setOriginalPrice(originalprice / 2)
  }
 

  return (
      <div id='discountprice'>
        <div className='discount'>
          <div className='prices'>
              <input 
                value= {`$${discountedprice}`} 
              />
              <input 
                value= {`$${originalprice}`} 
              />
            </div>      

            <input  className='discountedprice' 
              value={`${percentage}%`} 
            />
        </div>

        <div className='addbtn'>
          <div className='add'>
              <Button startIcon={<AddIcon />} onClick={increament} count={count}></Button >
              {count <= 0 ? 0 :  <input type="text" value={count} />}
            <Button startIcon={<RemoveIcon />} onClick={decreament}></Button>
          </div>
          
          <div className='checkout'>
            
            <CheckoutBtn count={count} discountedprice={discountedprice} title={title} setInitialimg={setInitialimg}/>
         
            
          </div>
        </div>
      </div>
    
    
    
  )
}

export default DiscountPrice