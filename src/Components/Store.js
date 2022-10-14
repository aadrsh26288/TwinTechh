import React,{ useState, useEffect,useContext} from 'react'
import {BsStarFill} from 'react-icons/bs'
import {BsStarHalf} from 'react-icons/bs'
import {BsStar} from 'react-icons/bs'
import{AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineDown} from 'react-icons/ai'
import{FaShoppingCart} from 'react-icons/fa'
import {BsFillMicFill} from 'react-icons/bs'
import banner from '../Img/banner.jpg'
// import{products} from '../Lib/data'
import {Link} from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Lib/initFirebase";
// import {Navigate,Link} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const MyContext =React.createContext();



const Store = ({data,onAdd,countCartItems,getData,onbuy}) => {
   
     
       const [categoryy,setcategory]= useState()
       const [min,setmin]= useState('')
       const [max,setmax]= useState('')
       const [price,setprice]= useState()
       const [price2,setprice2]= useState()
       const [blogs, setBlogs] = useState([])
       const [loading, setLoading] = useState(true)
       const[newcategory,setNewCategory] = useState([])
       const [star ,setstar] = useState('')
       const [modal,setModal] = useState(false)

       const [userName,setUserName] = useState('')
       const[email,setEmail] = useState('')
       const[mobile,setMobile] = useState('')
       const[address,setAddress] = useState('')
       const[payment,setPayment] = useState('')



console.log(payment)

       const orderInfo = {
              username: userName,
              email:email,
              mobile: mobile,
              address: address,
              payment: payment
              
       }

    
     function getBlogs(){
           setLoading(true)
           const blogsCollectionRef = collection(db, "Products")
           getDocs(blogsCollectionRef)
               .then( response => {
                   const blogResponse = response.docs.map( doc => ({
                       data: doc.data(),
                       id: doc.id
                   }))
                   setBlogs(blogResponse)
                   setNewCategory(blogResponse)
                   setLoading(false)
               } )
               .catch( error => alert(error.message) )
       }
   
       useEffect(() => {
           getBlogs()
       }, []) 

       
       
     function searchproductOfType(searchType){
       const newItems = newcategory.filter((category)=>{
         setcategory(searchType)
           return category.data.category===searchType
       })
      
       setBlogs(newItems)
   }

   function MyRate(star){
       setstar("")
       setBlogs(newcategory)
   }



function PriceFilter(min,max){
       const NewPrice =newcategory.filter((p)=>{
              // console.log(p.data.price)
        return parseInt(p.data.price )> min && parseInt(p.data.price) < max
       // if(p.data.price > min && p.data.price < max){
       //     console.log(p.data.price) 
       // }
    })
       setBlogs(NewPrice)
}

function HandleMinMax(min,max){
       setmin('')
       setmax('')
       setBlogs(newcategory)
}


   function Rating(price2){
       const newRate=newcategory.filter((r)=>{
              setstar(price2)
             return r.data.rate===price2
       })
       setBlogs(newRate)

   }
   
//    console.log(blogs)
// console.log(categoryy)

function HandeCategory(type){
       setcategory('')
       setBlogs(newcategory)

}

function HandelPrice(min,max){
       // setcategory('')
       setprice('')
       setprice2('')

       setBlogs(newcategory)

}

function CheckBoxRating(min, max){
       const NewRate = newcategory.filter((p)=>{
              setprice(min)
              setprice2(max)
        return parseInt(p.data.price )> min && parseInt(p.data.price) < max
              
       })
       setBlogs(NewRate)
}

function Clearfilter(){
       setprice('')
       setcategory('')
       setprice2('')
       setstar("")
       setBlogs(newcategory)
}



function Handler(e){
       e.preventDefault()
       getData(orderInfo)
       toast.success('Order Info Successfully Added please buy Products from below😀', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
           
       setAddress('')
       setMobile('')
       setUserName('')
       setEmail('')
       setPayment('')
}





  return (
       <>

    <div className="py-20 relative flex">
        <div className="border-2 " style={{width: '294px'}}>
            <h3 className='border-b-2 p-2'>Filter</h3>
            <p className="text-lg font-semibold px-2">Choice</p>
            <div className="pl-6 border-b-2">
         
                <div>
                <div className="flex items-center">
                       <input type="checkbox"></input>
                       <span className="ml-1" >Choice 1</span>
                </div>

                <div className="flex items-center">
                       <input type="checkbox"></input>
                       <span className="ml-1" >Choice 2</span>
                </div>
             
                <div className="flex items-center">
                       <input type="checkbox"></input>
                       <span className="ml-1" >Choice 3</span>
                </div>
             
                <div className="flex items-center">
                       <input type="checkbox"></input>
                       <span className="ml-1" >Choice 4</span>
                </div>
                <div className="flex items-center">
                       <input type="checkbox"></input>
                       <span className="ml-1" >Choice 5</span>
                </div>

                <p>Others </p>
    
                </div>
           
            </div>

            {/* price section */}
            <div>
            <p className="text-lg font-semibold p-2 ">Price</p>
            
            <div className='pl-6 border-b-2'>
                <div className="flex items-center">
                       <input type="checkbox" onClick={()=>{CheckBoxRating(0,500)}}></input>
                       <span className="ml-1" >Under ₹500</span>
                </div>

                <div className="flex items-center">
                       <input type="checkbox" onClick={()=>{CheckBoxRating(500,1000)}}></input>
                       <span className="ml-1" >₹500 - $1000</span>
                </div>
             
                <div className="flex items-center">
                       <input type="checkbox"onClick={()=>{CheckBoxRating(1000,1500)}} ></input>
                       <span className="ml-1">₹1000 - ₹1500</span>
                </div>
             
                <div className="flex items-center">
                       <input type="checkbox" onClick={()=>{CheckBoxRating(1500.2000)}} ></input>
                       <span className="ml-1" >₹1500 - ₹2000</span>
                </div>
                <div className="flex items-center">
                       <input type="checkbox"onClick={()=>{CheckBoxRating(2000,100000)}} ></input>
                       <span className="ml-1" >Over  ₹2000</span>
                </div>

                <div className="flex items-center gap-2">
                    <input type="number" placeholder="Min" value={min} onChange={(e)=>{setmin(e.target.value)}} className="w-16 outline-none border-2 rounded-md p-1"></input>
                    <input type="number" placeholder="Max" value={max} onChange={(e)=>{setmax(e.target.value)}} className="w-16 outline-none border-2 rounded-md p-1"></input>
                    <p className='text-lg font-semibold mt-3 cursor-pointer' onClick={()=>{PriceFilter(min,max)}}>Go</p>

                </div>
    
                </div>
           

            </div>

            {/* Rating section*/}

            <div>
            <p className="text-lg font-semibold p-2 ">Rating</p>
            
            <div className='pl-6 border-b-2 pb-4 flex flex-col gap-3'>
                <div className="flex items-center">
                       <input type="checkbox"  onClick={()=>{Rating('5')}}></input>
                       <span className="ml-1 flex gap-1" ><BsStarFill color={'gold'}/> <BsStarFill color={'gold'}/><BsStarFill color={'gold'}/><BsStarFill color={'gold'}/><BsStarFill color={'gold'}/></span>
                </div>

                <div className="flex items-center">
                       <input type="checkbox" onClick={()=>{Rating('4')}} value='4'></input>
                       <span className="ml-1 flex gap-1" ><BsStarFill color={'gold'}/> <BsStarFill color={'gold'}/><BsStarFill color={'gold'}/><BsStarFill color={'gold'}/><BsStarHalf color={'gold'}/></span>
                       
                </div>
             
                <div className="flex items-center">
                       <input type="checkbox"  onClick={()=>{Rating('3')}} ></input>
                       <span className="ml-1 flex gap-1" ><BsStarFill color={'gold'}/> <BsStarFill color={'gold'}/><BsStarFill color={'gold'}/><BsStarHalf color={'gold'}/><BsStarHalf color={'gold'}/></span>      
                </div>
             
                <div className="flex items-center">
                       <input type="checkbox"  onClick={()=>{Rating('2')}} value='4'></input>
                       <span className="ml-1 flex gap-1" ><BsStarFill color={'gold'}/> <BsStarFill color={'gold'}/><BsStarHalf color={'gold'}/><BsStarHalf color={'gold'}/><BsStarHalf color={'gold'}/></span>      

                       
                </div>
                <div className="flex items-center">
                       <input type="checkbox" onClick={()=>{Rating('1')}}></input>
                       <span className="ml-1 flex gap-1" ><BsStarFill color={'gold'}/> <BsStarHalf color={'gold'}/><BsStarHalf color={'gold'}/><BsStarHalf color={'gold'}/><BsStarHalf color={'gold'}/></span>      

                       
                </div>

                {/* <div className="flex items-center gap-2">
                    <input type="number" placeholder="Min" className="w-16 outline-none border-2 p-1"></input>
                    <input type="number" placeholder="Max" className="w-16 outline-none border-2 p-1"></input>
                    <p className='text-lg font-semibold mt-3'>Go</p>

                </div> */}
    
                </div>
            </div>

            {/*Brands section  */}
            <p className="text-lg font-semibold p-2">Brands</p>
            <div className="pl-6 border-b-2">
         
                <div className="flex flex-col gap-1 pb-3 text-lg">
                <div className="flex items-center">
                       <input type="checkbox"></input>
                       <span className="ml-1" >Brand 1</span>
                </div>

                <div className="flex items-center">
                       <input type="checkbox"></input>
                       <span className="ml-1" >Brand 2</span>
                </div>
             
                <div className="flex items-center">
                       <input type="checkbox"></input>
                       <span className="ml-1" >Brand 3</span>
                </div>
             
                <div className="flex items-center">
                       <input type="checkbox"></input>
                       <span className="ml-1" >Brand  4</span>
                </div>
                <div className="flex items-center">
                       <input type="checkbox"></input>
                       <span className="ml-1" >Brand  5</span>
                </div>
                </div>
           
            </div>

            {/* others */}
            <div>
                <div className="border-b-2 pb-3">
                <p className="text-lg font-semibold p-2 ">Deals</p>

                <div className="">
                <div className="flex items-center pl-8 ">
                       <input type="checkbox"></input>
                       <span className="ml-1" >Todays Deals</span>
                </div>
                </div>

                </div>


                <div className="border-b-2 pb-3">
                <p className="text-lg font-semibold p-2">Availability</p>

                <div className=" ">
                <div className="flex items-center pl-8  ">
                       <input type="checkbox"></input>
                       <span className="ml-1" >Inlcude Out of Stock</span>
                </div>
                </div>
                
                </div>


                <div className="border-b-2 pb-3">
                <p className="text-lg font-semibold p-2">Pay on Delivery</p>

                <div className="">
                <div className="flex items-center pl-8  ">
                       <input type="checkbox"></input>
                       <span className="ml-1" >Eligible for Pay On Delivery</span>
                </div>
                </div>
                
                </div>

                <div className="flex items-center flex-col justify-between p-3 border-b-2 " >
                <p className="text-lg font-semibold ">Category</p>
                <div className="flex flex-col gap-2">
                <button onClick={()=>{searchproductOfType('Table')}}>Table</button>
                <button  onClick={()=>{searchproductOfType('Chair')}}>Chair</button>
                <button  onClick={()=>{searchproductOfType('Bed')}}>Bed</button>
                <button  onClick={()=>{searchproductOfType('Desk')}}>Desk</button>
                <button  onClick={()=>{searchproductOfType('Almirah')}}>Almirah</button>
                <button  onClick={()=>{searchproductOfType('Sofa')}}>Sofa</button>
                <button  onClick={()=>{searchproductOfType('Wooden-rack')}}>Wooden-rack</button>


                </div>
             

                <AiOutlineDown />
                </div>


                <div className='flex items-center justify-center p-3 border-b-2'>
                    <p className="text-lg font-semibold ">More</p>
                </div>

            </div>
        



        </div>

        {/* Products section*/}

          <div className=" w-full p-3">
            <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 relative">
                    <input type="text" placeholder="Search... " className=" pl-10 py-2 border-2 outline-none rounded-lg" style={{width:'500px'}}></input>
                    <AiOutlineSearch  className='absolute top-2 ml-1' size={30}/>
              <Link to='/cart' className='flex no-underline '>  <FaShoppingCart size={30} color={'#37978B'} />{countCartItems}</Link>
                   
                    <BsFillMicFill size={30} color={'#37978B'}/>
                </div>

                <div className='border-2 rounded-lg'>
                <label htmlFor="options " className='p-2  border-r-2'>Sort By</label>

                <select id="options" className=' p-1 px-4 outline-none'>
                   <option value="Recommended">Recommended</option>
                   <option value="New">New</option>
                   <option value="Trending">Trending</option>
                   <option value="Popular">Popular</option>
                </select>

                </div>

            </div>

            <p className="text-gray-500 ml-3 text-lg mt-3">Search result for “Lorem ipsum”</p>

        <div className="flex items-center gap-6" >
              {/* {categoryy ||} */}
              <p className={`flex gap-5 text-lg  p-2 font-semibold px-4 text-white rounded-xl ${categoryy ? 'flex' :'hidden'} `} onClick={()=>{HandeCategory(categoryy)}} style={{background:'#37978B'}}>{categoryy}<span className='cursor-pointer'>X</span></p>
              <p className={`flex gap-5 text-lg  p-2 font-semibold px-4 text-white rounded-xl ${star ? 'flex' :'hidden'} `} onClick={()=>{MyRate(star)}} style={{background:'#37978B'}}>{star} Star<span className='cursor-pointer'>X</span></p>
              <p className={`flex gap-5 text-lg  p-2 font-semibold px-4 text-white rounded-xl ${min ? 'flex' :'hidden'} `} onClick={()=>{HandleMinMax(min,max)}} style={{background:'#37978B'}}>₹{min}-₹{max}<span className='cursor-pointer'>X</span></p>
              <p className={`flex gap-5 text-lg  p-2 font-semibold px-4 text-white rounded-xl ${price ? 'flex' :'hidden'} `} onClick={()=>{HandelPrice(min,max)}} style={{background:'#37978B'}}>₹{price}-₹{price2}<span className='cursor-pointer'>X</span></p>
              <p className={`cursor-pointer ${price ? 'flex' :star ? 'flex' : categoryy ? 'flex' : min ? 'flex' : max ? 'flex' :'hidden'}`} onClick={()=>{Clearfilter()}}>Clear Filters</p>



             
              {/* <p onClick={()=>HandeCategory(categoryy)} >Clear filter</p> */}

        </div>
        {/* items section */}

     <div className="grid md:grid-cols-3 gap-3  border-b-2 border-black p-5  w-full relative " >
       {
              blogs.map((product) =>{
                     // const {id,name,Price,img}=product;
                     return (
                   
                        <div> 
                         
                           
                           
                
                            <div className=' p-3 w-auto' key={product.id}>
                                  
                            <div>
                            <Link to={`/ProductPreview/${product.id}`}>  <img src={product.data.img} alt="b" className="rounded-lg object-cover	" style={{height:'200px', width:'284px'}}/>            </Link>
                            </div>
                           
                            <div>
                                   <div>
                                   <h3 className='m-0 mt-1'>{product.data.title}</h3>
                                   <p className="text-gray-500 m-0 mt-1">Lorem ipsum dolor sit amet<br></br> consectetur adipisicing elit.</p>
                                   <p className='text-lg font-semibold m-0 mt-1'>₹{product.data.price}</p>
                                   </div>
                       

                                 
                                   <div className='flex flex-col gap-3 mt-2'>
                                          <button className=' text-center text-white w-72 py-1 text-lg rounded-lg' style={{background:'#37978B'}} onClick={() => onAdd(product)}>Add to cart</button>
                                          <button className=' text-center text-white w-72 py-1 text-lg rounded-lg' style={{background:'#37978B'}} onClick={()=>setModal(!modal)}>Buy Now</button>
              
                                   </div>
                            </div>
                      </div>
              
                      </div>
                  
              

                     )
              })
       }


    
{modal==true? (<div className='w-[1000px] h-full bg-[#c7c3c3] absolute z-40' >
                               <button className='float-right text-xl rounded-xl text-white bg-[#37978B] m-5 font-semibold py-2 px-4' onClick={() =>{setModal(false)}}>X</button>
                                          <form onSubmit={Handler} className=' mt-20 flex flex-col gap-3 p-5 ml-24 '>
                                          <input type='text' className='p-2 outline-none rounded-lg' placeholder='Name' onChange={(e)=>{setUserName(e.target.value)}} value={userName}/>
                                          <input type='email' className='p-2 outline-none rounded-lg' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} value={email} />
                                          <input type='number' className='p-2 outline-none rounded-lg' maxLength='10' placeholder='Mobile'onChange={(e)=>{setMobile(e.target.value)}} value={mobile} />
                                        
                                        <div className='flex gap-5'>
                                          {/* <p>payments method</p> */}
                                        <label>Cash
                                          <input type="radio" name='cash' value='cash' onChange={(e)=>{setPayment(e.target.value)}}></input>
                                        </label>

                                        <label>Upi
                                          <input type="radio" name="upi" value='upi'  onChange={(e)=>{setPayment(e.target.value)}}></input>
                                        </label>

                                        <label>Netbaking
                                          <input type="radio" name="netbaking" value='netbaking'  onChange={(e)=>{setPayment(e.target.value)}}></input>
                                        </label>
                                        </div>
                                        
                                          <textarea placeholder='Address'className='p-2 outline-none rounded-lg'onChange={(e)=>{setAddress(e.target.value)}} value={address}> </textarea>
                                          <button type='submit' className='p-2 px-4 bg-[#37978B] text-white rounded-lg'>Submit</button>
                                          </form>
                                          <div className='grid grid-cols-4 gap-6 p-5'>
                                          {
                                                 data.map((product)=>{
                                                        return (
                                                               <div className=" text-xl text-red-500  w-[200px] p" key={product.id}>
                                                                      <div className="p-2 rounded-lg">
                                                                             <img src={product.data.img} className="w-[200px] h-[100px] object-cover"/>
                                                                             <div className="flex justify-between">
                                                                             <p className='text-black'>{product.data.title}</p> 
                                                                           <p className='text-red-600'>₹ {product.data.price}</p>      
                                                                             </div>
                                                                                                           
                                                                         <button className=' text-center text-white text-lg rounded-md w-full my-2 p-1' style={{background:'#37978B'}} onClick={() => onbuy(product)}>Buy</button> 
                                                                      </div>


                                                               </div>

                                                        )
                                                 })
                                          }
                                         </div>

                                           </div>):''}
   
        </div>

        <div className="my-5">
              <div className="flex items-center p-2 gap-3">
              <h3 className="pl-4">Top brands</h3>
              <span className='text-sm text-gray-400'>See all deals</span>
              </div>
         
              
     <div className="flex gap-3 overflow-x-scroll overflow-y-hidden border-b-2 border-black p-3 row-posters " style={{width:'1020px'}}>
       {
              data.map((product) =>{
                     // const {id,name,price,img}=product;
                     return (
                            <div>
                            <div className=' p-3 w-auto' key={product.id}>
                            <div>
                                   <img src={product.data.img} alt="b" className="rounded-lg object-cover"  style={{height:'200px', width:'284px'}}/>
                            </div>
                            <div>
                                   <h3 className='m-0 mt-1'>{product.data.title}</h3>
                                   <p className="text-gray-500 m-0 mt-1">Lorem ipsum dolor sit amet<br></br> consectetur adipisicing elit.</p>
                                   <p className='text-lg font-semibold m-0 mt-1'>₹{product.data.price}</p>
              
                                   <div className='flex flex-col gap-3 mt-2 relative'>
                                          <button className=' text-center text-white w-72 py-1 text-lg rounded-lg' style={{background:'#37978B'}} onClick={() => onAdd(product)}>Add to cart</button> 
                                 <button className=' text-center text-white w-72 py-1 text-lg rounded-lg' style={{background:'#37978B'}} onClick={()=>setModal(!modal)}>Buy Now</button>  
             
               
                                   </div>
                            </div>
                            
                      </div>
                      
                      </div>
              

                     )
              })
       }


    
        
   
        </div>
              
                                    
    
        </div>


          </div>

          <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </div>
    </>
  )
}

export default Store






