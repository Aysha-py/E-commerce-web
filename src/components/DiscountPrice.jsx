import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckoutBtn from './CheckoutBtn';
import CheckoutModal from './CheckoutModal';


const DiscountPrice = ({title}) => {
  

  const [originalprice,setOriginalPrice] = useState(20000)
  const [discountedprice,setDiscountedPrice] = useState(0)
  const [percentage,setPercentage] =useState(50)
  const [count,setCount] =useState(1)
  const [show,setShow]= useState(false)


  useEffect(() => {
    if (originalprice && percentage ) {
      const per = ((percentage) /100)* originalprice ;
      const remainder = originalprice-per 
     setDiscountedPrice(remainder);
    }  
  }, [originalprice,percentage ])
  

  // const calculate =()=>{
  //   const per = ((percentage) /100)* originalprice ;
  //    const remainder = originalprice-per
  //   console.log(per)
  //   setDiscountedPrice(remainder);
  // }
  const increament=()=>{
    setCount(count+1) 
    setOriginalPrice(originalprice *2)
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
          <Button startIcon={<AddIcon />} onClick={increament} count={count}></Button >
            {count <= 0 ? 1 :  <input type="text" value={count} />}
          <Button startIcon={<RemoveIcon />} onClick={decreament}></Button>
          <div className='checkout'>
            
            <CheckoutBtn count={count} discountedprice={discountedprice} title={title} show={show} setshow={setShow}/>
         
            
          </div>
        </div>
      </div>
    
    
    
  )
}

export default DiscountPrice