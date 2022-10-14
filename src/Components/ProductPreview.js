
import React, { useState, useEffect } from 'react'
import {
    Link,
    useParams
} from "react-router-dom";
import {BsCartPlus,BsHeartFill} from 'react-icons/bs'
import {BsStarFill} from 'react-icons/bs'
import{FaShoppingCart} from 'react-icons/fa'

import {BsStarHalf,BsBookmarkPlus} from 'react-icons/bs'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Lib/initFirebase";
import { icons } from 'react-icons/lib';


const ProductPreview = ({data,onAdd,countCartItems,onAdd2,ListLength}) => {
    let { productId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [ blog, setBlog ] = useState([]);

    useEffect(() => {
      getBlogData()
    }, [])

    function getBlogData(){
        const blogsCollectionRef = collection(db, "Products")
        getDocs(blogsCollectionRef)
          .then( response => {
              const blogResponse = response.docs.map( doc => ({
                  data: doc.data(),
                  id: doc.id
              }))
              const thisBlog = blogResponse.find((blog)=> {
                  return (blog.id === productId)
              })
              setBlog(thisBlog)
            
              setIsLoading(false)
          } )
          .catch( error => console.log(error.message) )
    }
  return (
    <div>
              
<div className="mt-20 p-3 flex justify-end gap-3" >
<Link to='/cart' className='flex no-underline '>  <FaShoppingCart size={35} color={'#37978B'} />{countCartItems}</Link>
<Link to='/WhisList' className='flex no-underline '>  <BsBookmarkPlus size={35} color={'#37978B'} />{ListLength}</Link>


</div>

         <>
        {isLoading ? "Loading...": 
          <>

        <div className=" grid md:grid-cols-2  justify-content-center p-5"> 
            <img src={blog.data.img} alt="product" className="h-full object-cover"/>
            <div className=" p-3 bg-gray-100">
                <h3 >{blog.data.title}</h3>
                <p className='text-lg md:mr-5 font-normal p-1 text-gray-600'>{blog.data.summary}</p>
                {/* <p className='text-md font-semibold p-1'>Category: {blog.data.category}</p> */}

                <p className='text-4xl font-medium p-1 text-[#B12704] font-serif'>₹{blog.data.price}</p>
                {blog.data.rate==1 ?<span className="ml-1 flex gap-1 " ><BsStarFill color={'gold'} size="34"/> <BsStarHalf  color={'gold'}  size="34"/><BsStarHalf  color={'gold'}  size="34"/><BsStarHalf color={'gold'}  size="34"/><BsStarHalf color={'gold'}  size="34"/></span>  : <div className="hidden"></div>}   
                {blog.data.rate==2 ?<span className="ml-1 flex gap-1 " ><BsStarFill color={'gold'} size="34"/> <BsStarFill color={'gold'}  size="34"/><BsStarHalf color={'gold'}  size="34"/><BsStarHalf color={'gold'}  size="34"/><BsStarHalf color={'gold'}  size="34"/></span>  : <div className="hidden"></div>}     
                {blog.data.rate==3 ?<span className="ml-1 flex gap-1 " ><BsStarFill color={'gold'} size="34"/> <BsStarFill color={'gold'}  size="34"/><BsStarFill color={'gold'}  size="34"/><BsStarHalf color={'gold'}  size="34"/><BsStarHalf color={'gold'}  size="34"/></span>  : <div className="hidden"></div>}     
                {blog.data.rate==4 ?<span className="ml-1 flex gap-1 " ><BsStarFill color={'gold'} size="34"/> <BsStarFill color={'gold'}  size="34"/><BsStarFill color={'gold'}  size="34"/><BsStarFill color={'gold'}  size="34"/><BsStarHalf color={'gold'}  size="34"/></span>  : <div className="hidden"></div>}     
                {blog.data.rate==5 ?<span className="ml-1 flex gap-1 " ><BsStarFill color={'gold'} size="34"/> <BsStarFill color={'gold'}  size="34"/><BsStarFill color={'gold'}  size="34"/><BsStarFill color={'gold'}  size="34"/><BsStarFill color={'gold'}  size="34"/></span>  : <div className="hidden"></div>}     
              <div className='text-md flex flex-col py-4'>
                <p className='text-lg font-medium '>Available offers</p>
               <p className='flex items-center gap-3'><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" className='w-[20px] h-[20px]'/>Bank Offer5% Cashback on TwinTech Axis Bank CardT&C</p> 
               <p className='flex items-center  gap-3'><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" className='w-[20px] h-[20px]'/>Special PriceGet extra ₹3000 off (price inclusive of cashback/coupon)T&C</p>
               <p className='flex items-center  gap-3'><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" className='w-[20px] h-[20px]'/>Partner OfferSign up for TwinTech Pay Later and get TwinTech Gift Card worth upto ₹1000*Know More</p> 
               <p className='flex items-center  gap-3'><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" className='w-[20px] h-[20px]'/>No cost EMI ₹4,667/month. Standard EMI also availableView Plans </p>
                </div>


                <div className="grid md:grid-cols-2 gap-4 px-4 ">
                    <button className="flex bg-[#37978B] text-white py-3 text-center px-4 text-lg gap-3 rounded-xl items-center font-medium" onClick={()=>{onAdd(blog)}}><BsCartPlus size="24"/>Add to Cart</button>
                    <button className="flex bg-[#37978B] text-white py-3 text-center px-4 text-lg gap-3 rounded-xl items-center font-medium" onClick={()=>{onAdd2(blog)}}><BsHeartFill size="24"/>Add to WhisList</button>

                </div>
            </div>

        </div>
          </>
        }
      </>
    </div>
  )
}

export default ProductPreview