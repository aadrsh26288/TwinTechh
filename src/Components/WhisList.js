import React from 'react'
import {BsCartPlus,BsHeartFill} from 'react-icons/bs'
import {BsStarFill} from 'react-icons/bs'
import{FaShoppingCart} from 'react-icons/fa'
import{ImCross} from 'react-icons/im'
import {BsStarHalf,BsBookmarkPlus} from 'react-icons/bs'
const WhisList = ({onAdd2,WhisList,deleteWhis}) => {
  return (
    <div className="my-20">
        <h1 className='text-center'>WhisList</h1>

        {
            WhisList.map((blog)=>{
                return (
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
              {/* <div className='text-md flex flex-col py-4'>
                <p className='text-lg font-medium '>Available offers</p>
               <p className='flex items-center gap-3'><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" className='w-[20px] h-[20px]'/>Bank Offer5% Cashback on TwinTech Axis Bank CardT&C</p> 
               <p className='flex items-center  gap-3'><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" className='w-[20px] h-[20px]'/>Special PriceGet extra ₹3000 off (price inclusive of cashback/coupon)T&C</p>
               <p className='flex items-center  gap-3'><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" className='w-[20px] h-[20px]'/>Partner OfferSign up for TwinTech Pay Later and get TwinTech Gift Card worth upto ₹1000*Know More</p> 
               <p className='flex items-center  gap-3'><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" className='w-[20px] h-[20px]'/>No cost EMI ₹4,667/month. Standard EMI also availableView Plans </p>
                </div> */}


                <div className="grid md:grid-cols-2 gap-4 py-10 ">
                    <button className="flex bg-[#37978B] text-white py-3 text-center px-4 text-lg gap-3 rounded-xl items-center font-medium"><BsCartPlus size="24"/>Buy Now</button>
                    <button className="flex bg-[#37978B] text-white py-3 text-center px-4 text-lg gap-3 rounded-xl items-center font-medium" onClick={()=>{deleteWhis(blog)}}><ImCross/>Remove</button>

                </div>
            </div>

        </div>
                    </>
                )
                
            })
        }
    </div>
  )
}

export default WhisList