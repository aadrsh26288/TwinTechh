import React ,{useState}from 'react'
// import { Editor, } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {Link} from 'react-router-dom'
const Users = () => {
  return (
    <div className='flex md:flex-row flex-col mt-4'>
      <div className="md:w-64 md:h-screen border-2 md:mt-10   h-32 w-full flex  justify-center" style={{background:'#37978B'}}>
          <div className='flex md:flex-col mt-3 gap-6 md:gap-12 decoration-none  text-green-600'>
       <Link to='/admin' className=' text-black no-underline flex items-center justify-between md:text-xl text-lg gap-3'>Add Blogs</Link> 
       <Link to='/admin/products' className=' text-black  no-underline flex items-center justify-start md:text-xl text-lg gap-3'> Add Products</Link> 
       <Link to='/admin/users' className=' text-black no-underline flex  items-center justify-start md:text-xl text-lg gap-3'>Users</Link> 
       <Link to='/admin/CurrentUsers' className=' text-black  no-underline flex items-center justify-start  md:text-xl text-lg gap-3'>Current Users</Link> 
       {/* <Link to='/admin/dash' className=' text-black no-underline flex items-center justify-start md:text-xl text-lg gap-3'>Dash</Link> 
       <Link to='/products' className=' text-black no-underline flex items-center justify-start md:text-xl text-lg gap-3'>Products</Link>  */}         
   </div>
       </div>

            <div className=' md:p-0 p-14 w-full flex items-center justify-center'>
                   <h1  className='text-5xl text-centered font-serif'> Welcome users</h1>
            </div>

    </div>
  )
}

export default Users



 export const Help = () => {
   return (
     <div className='flex md:flex-row flex-col mt-4'>
             <div className="md:w-64 md:h-screen border-2 md:mt-10   h-32 w-full flex  justify-center" style={{background:'#37978B'}}>
          <div className='flex md:flex-col mt-3 gap-6 md:gap-12 decoration-none  text-green-600'>
       <Link to='/admin' className=' text-black no-underline flex items-center justify-between md:text-xl text-lg gap-3'>Add Blogs</Link> 
       <Link to='/admin/products' className=' text-black  no-underline flex items-center justify-start md:text-xl text-lg gap-3'> Add Products</Link> 
       <Link to='/admin/users' className=' text-black no-underline flex  items-center justify-start md:text-xl text-lg gap-3'>Users</Link> 
       <Link to='/admin/CurrentUsers' className=' text-black  no-underline flex items-center justify-start  md:text-xl text-lg gap-3'>Current Users</Link> 
       {/* <Link to='/admin/dash' className=' text-black no-underline flex items-center justify-start md:text-xl text-lg gap-3'>Dash</Link> 
       <Link to='/products' className=' text-black no-underline flex items-center justify-start md:text-xl text-lg gap-3'>Products</Link>  */}         
   </div>
       </div>

             <div className=' md:p-0 p-14 w-full flex items-center justify-center'>
                    <h1  className='text-5xl text-centered font-serif'> Need Any Help?</h1>
             </div>
 
     </div>
   )
 }
 


 

  export const Feed = () => {
   return (
     <div className='flex md:flex-row flex-col mt-4'>
           <div className="md:w-64 md:h-screen border-2 md:mt-10   h-32 w-full flex  justify-center" style={{background:'#37978B'}}>
          <div className='flex md:flex-col mt-3 gap-6 md:gap-12 decoration-none  text-green-600'>
       <Link to='/admin' className=' text-black no-underline flex items-center justify-between md:text-xl text-lg gap-3'>Add Blogs</Link> 
       <Link to='/admin/products' className=' text-black  no-underline flex items-center justify-start md:text-xl text-lg gap-3'> Add Products</Link> 
       <Link to='/admin/users' className=' text-black no-underline flex  items-center justify-start md:text-xl text-lg gap-3'>Users</Link> 
       <Link to='/admin/CurrentUsers' className=' text-black  no-underline flex items-center justify-start  md:text-xl text-lg gap-3'>Current Users</Link> 
       {/* <Link to='/admin/dash' className=' text-black no-underline flex items-center justify-start md:text-xl text-lg gap-3'>Dash</Link> 
       <Link to='/products' className=' text-black no-underline flex items-center justify-start md:text-xl text-lg gap-3'>Products</Link>  */}         
   </div>
       </div>

             <div className='md:p-0 p-14 w-full flex items-center justify-center'>
                    <h1  className='text-5xl text-centered font-serif'> Let us Know Your Feedback</h1>
             </div>
 
     </div>
   )
 }
 


 


  export const Dash = () => {
   return (
     <div className='flex md:flex-row flex-col mt-4'>
           <div className="md:w-64 md:h-screen border-2 md:mt-10   h-32 w-full flex  justify-center" style={{background:'#37978B'}}>
          <div className='flex md:flex-col mt-3 gap-6 md:gap-12 decoration-none  text-green-600'>
       <Link to='/admin' className=' text-black no-underline flex items-center justify-between md:text-xl text-lg gap-3'>Add Blogs</Link> 
       <Link to='/admin/products' className=' text-black  no-underline flex items-center justify-start md:text-xl text-lg gap-3'> Add Products</Link> 
       <Link to='/admin/users' className=' text-black no-underline flex  items-center justify-start md:text-xl text-lg gap-3'>Users</Link> 
       <Link to='/admin/CurrentUsers' className=' text-black  no-underline flex items-center justify-start  md:text-xl text-lg gap-3'>Current Users</Link> 
       {/* <Link to='/admin/dash' className=' text-black no-underline flex items-center justify-start md:text-xl text-lg gap-3'>Dash</Link> 
       <Link to='/products' className=' text-black no-underline flex items-center justify-start md:text-xl text-lg gap-3'>Products</Link>  */}         
   </div>
       </div>

             <div className=' md:p-0 p-14 w-full flex items-center justify-center'>
                    <h1  className='text-5xl text-centered font-serif'> DashBoard</h1>
             </div>
 
     </div>
   )
 }
 
 
 
