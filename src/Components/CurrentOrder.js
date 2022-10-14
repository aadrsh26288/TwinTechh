import React,{useState} from 'react'
import { v4 as uuid } from 'uuid';
import{GoPerson,GoDeviceMobile} from 'react-icons/go'
import{MdEmail} from 'react-icons/md'
import{BsFillSignpostSplitFill,BsBank2,BsCashCoin} from 'react-icons/bs'

const CurrentOrder = ({orderDetails}) => {
const random = Math.floor(Math.random() * 20);
 



  return (
    <div className="mt-20 p-5 grid grid-cols-2 ">
        {/* <h1 className='text-center'>Current Order</h1> */}
  
{orderDetails.map((item)=>{
    return (
        <div className="border-2 m-4 p-2  bg-[#c7c3c3] " key={item.id}>

            <img src={item.data.img} className="h-[300px] w-full object-cover"/>

       <div>
       <p className="text-lg font-semibold"> {item.data.title}</p>
            <p className="text-lg ">Order Id - {item.Orderid}</p>
            <div className=" ">
             {/* <p className="text-lg font-semibold">Customer Details</p>  */}
            <p className='flex text-lg items-center gap-1'><GoPerson size='30'/> {item.CustomerName}</p>
            <p className='flex text-lg items-center gap-1'> <GoDeviceMobile size='30'/>{item.mobile}</p>
            <p className='flex text-lg items-center gap-1'> <MdEmail size='30'/>{item.email}</p>
            <p className='flex text-lg items-center gap-1'><BsCashCoin size='30'/>{item.payment}</p>
            <p className='flex text-lg items-center gap-1 text-justify'><BsFillSignpostSplitFill size='30'/>{item.address}</p>
       </div>
    
            </div>
   
        </div>
    )
})}
    </div>
  )
}

export default CurrentOrder