import React,{useState} from 'react'
import product1 from "../assets/img/product1.jpg"
import image1 from "../assets/img/image1.jpg"
import image2 from "../assets/img/image2.jpg"
import image3 from "../assets/img/image3.jpg"
import image4 from "../assets/img/image4.jpg"
import DiscountPrice from '../components/DiscountPrice'




const Collection = ({toggleBtn,setToggleBtn,count,setCount}) => {

  
  const[initialimg,setInitialimg]=useState(product1)
  const[title,setTitle] =useState("FALL LIMITED EDITION SNEAKERS")
  const[tab,setTab]=useState(0) 
  const [carousel,setCarousel]=useState(false)

  const thumbnail = [
    {
      name:"thumbnail1",
      image: image1,
      id:1
    },
    {
      name:"thumbnail2",
      image: image2,
      id:2
    },
    {
      name:"thumbnail3",
      image: image3,
      id:3
    },
    {
      name:"thumbnail4",
      image: image4,
      id:4
    },
]

 

// setImage(...thumbnail)

 const image =(item)=>{ 
  setInitialimg(item)
 }

 
 

  return (
    <>
   
    
    <div id="product-info" >
    
      <div className='product'>
        <img src={initialimg} alt="product1" onClick={setCarousel}/>
          <div className='xtra'>
          {
            thumbnail.map((item,i)=>( 
              <div className='xtra-deets' >
                <img  key={i}  onClick={()=>{image(item.image);setTab(i);}} src={item.image} alt="item.name" />
              </div>
            ))
          }
            
        </div>
      </div>
        
        

        <div className='Description'>
            <h3 style={{color:"orangered"}}>SNEAKER COMPANY</h3>
            <h1>{title}</h1>
            <p>These Low Profile Sneakers are your perfect casual wear completion.
              Featuring a durable rubber Outer sole. They will withstand everything the weather
              can offer
            </p>
            
            <DiscountPrice   title={title} setInitialimg={setInitialimg} toggleBtn={toggleBtn} setToggleBtn={setToggleBtn} count={count} setCount={setCount}/>
           
        </div>
           
     
    </div>
    </>
  )
}

export default Collection