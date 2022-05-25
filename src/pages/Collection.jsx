import React,{useState} from 'react'
import product1 from "../assets/img/product1.jpg"
import image1 from "../assets/img/image1.jpg"
import image2 from "../assets/img/image2.jpg"
import image3 from "../assets/img/image3.jpg"
import image4 from "../assets/img/image4.jpg"
import DiscountPrice from '../components/DiscountPrice'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'



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
            <Gallery >
              <Item 
                original={image1}
                thumbnail={image1}
                width="400"
                height="400"
              >
                {({ ref, open }) => (
                  <img 
                    ref={ref}
                    onClick={open}
                    src={image1}
                    alt='image1'
                  />
                )}
              </Item>
              <Item 
                original={image2}
                thumbnail={image2}
                width="400"
                height="400"
              >
                {({ ref, open }) => (
                  <img 
                    ref={ref}
                    onClick={open}
                    src={image2}
                    alt='image2'
                  />
                )}
              </Item>
              <Item 
              original={image3}
              thumbnail={image3}
              width="400"
              height="400"
            >
              {({ ref, open }) => (
                <img 
                  ref={ref}
                  onClick={open}
                  src={image3}
                  alt='image3'
                />
              )}
            </Item>
            <Item 
            original={image4}
            thumbnail={image4}
            width="400"
            height="400"
          >
            {({ ref, open }) => (
              <img 
                ref={ref}
                onClick={open}
                src={image4}
                alt='image4'
              />
            )}
          </Item>
          </Gallery>
             
            
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