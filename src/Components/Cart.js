import React from 'react'
import{FaShoppingCart} from 'react-icons/fa'
import { IoAlertCircleSharp } from "react-icons/io5";

const Cart = ({  cartItems,onRemove, onAdd,remove,orderDetails}) => {

  
    
    console.log(cartItems)
const t = cartItems.reduce((total, item)=>total+(item.data.price*item.qty),0)
  return (
    <div className='my-20'>
        <h2 className='text-center flex justify-center items-center gap-3'><FaShoppingCart/>Cart</h2>
        <div>
            {  cartItems.length ===0 &&<h1>No Items Found</h1>}
        </div>
        <div className='flex justify-between items-center border-b-2 border-green-600 mx-3'>
          <p className='text-lg font-semibold'>Description</p>
          <div className='flex  justify-between items-center  w-1/4 px-3 pl-5'>
            <p className='text-lg font-semibold'>Quantity</p>
            <p className='text-lg font-semibold'>Remove</p>
            <p className='text-lg font-semibold'>Price</p>
          </div>
        </div>


        <div>
            {  orderDetails.cartItems.map((item) => {
                    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
              
                    // const totalPrice = itemsPrice 
                // const {id,name,img,Price} = item;
                const totalPrice = item.qty * item.price

                return (
                  <>
                    <div classNames=''>
                    <div key={item.id} className='border-b-2 border-green-600 flex  mx-3 md:flex-row flex-col  justify-between '>
                  

                    <div className=' p-3 flex items-center md:flex-row flex-col gap-4'>
                    <img src={item.data.img} alt={item.data.name} className='object-cover' style={{width: '417px', height: '417px'}}/>
                    <div>
                    <p className='text-lg font-semibold ' style={{width:'324px'}}>{item.data.name}</p>
                    <p>Category : {item.data.category}</p>
                    <p>Product code : 85AW985</p>
                      </div>
                   
                    {/* <p>{Price}$</p> */}
                    </div>

              <div className="flex w-96 item-center justify-center gap-3 p-3">
                <div className='flex justify-between  items-center'>
                  <button onClick={() => onAdd(item)} className="ml-3">
                <span className="text-lg text-center p-2 px-3" style={{background:'#37978B'}}>+</span>
                 </button>
                 <span className='p-2'>{item.qty} </span>
                 <button onClick={() =>onRemove(item)} ><span className="text-lg text-center p-2 px-3" style={{background:'#C7C3C3'}}>-</span>
                 </button>
                </div>


                <div className="flex items-center  pl-16 justify-between w-full">
               <button onClick={() =>{remove(item)}}> <span className="text-lg text-center p-2 px-3 h-16" style={{background:'#C7C3C3'}}>X</span></button>
                <p className='text-lg  font-semibold mt-2'>₹{item.data.price}</p>
                </div>
             
                    </div>
             
           
             </div> 
               
           
                   
        </div>
      </>
                )
            })}

<div className=' flex justify-between items-center px-4 p-3' >
  <div className='flex gap-4 p-3 items-center rounded-xl ' style={{background:'#C7C3C3'}}>
    <p className='text-lg'>Discount</p>
    <p style={{color:'#37978B'}} className='text-lg font-medium'>₹0.00</p>
  </div>
  <div className='flex gap-4 p-3 items-center rounded-xl ' style={{background:'#C7C3C3'}}>
    <p className='text-lg'>Delivery</p>
    <p style={{color:'#37978B'}} className='text-lg font-medium'>₹0.00</p>
  </div>

  <div className='flex gap-4 p-3 items-center rounded-xl  ' style={{background:'#C7C3C3'}}>
    <p className='text-lg'>Total</p>
    <p style={{color:'#37978B'}} className='text-lg font-medium'>₹{t}</p>
  </div>




  <div style={{background:'#C7C3C3'}} className='p-3 rounded-md'>
    <p className='flex items-center gap-2'><IoAlertCircleSharp size={25}  style={{color:'#37978B'}}/>Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit. Quos ut quis iure.</p>
    <p className='font-semibold'>Subtotal ({cartItems.length })  :  ₹700.00</p>
    <div>
    <input type="checkbox"></input><span className='ml-2'>This order contains a gift</span>
    </div>
    <button className="p-2 px-3 mt-2 rounded-lg text-white w-full text-center" style={{background:'#37978B'}}>Proceed to Pay</button>


  </div>
</div>

            {/* <p>Total: {t}</p> */}
        </div>
    </div>
  )
}

export default Cart




