import React,{ useState, useEffect} from 'react'
import AddBlog from './AddBlog'
import {
  Link,
  Outlet,
  useMatch,
  useResolvedPath,
  useNavigate,
  Navigate,
  useHistory
} from "react-router-dom";
// import CustomLink from './LoginSignup'
// import { HandIndex } from 'react-bootstrap-icons';







const Admin = () => {
  // let navigate = useNavigate();
  let navigate = useNavigate();

  const[password,setpassword] =useState('')
  const [ref,setref]=useState('')
  const [show,setshow] = useState(false)
  

  const useAuth = () => {
   


  }

  const [auth,setauth] = useState(true)


  function Handler(){
    setref(password)
    setshow(!show)
    // setauth(true)
  
    // alert(password)
   
  }

  // const isAuth = useAuth();
 
  
  return (
    <div className="mt-20  flex justify-center">
        {/* <CustomLink to={'/admin/help'} style={{ boxShadow: "4px 5px 10px 1px #9E9E9E" }} ><div>Log in</div></CustomLink> */}

      {/* { auth? <Outlet /> : <Navigate to="/admin" />} */}
      
      


   <div className="my-20 flex flex-col border-2 w-[500px] p-8 rounded-xl gap-2">
    <h3 className="text-center"> login</h3>
       <label className='text-lg font-medium'>Your Password</label>
       <input type='text' className='border-2 p-2 border-black rounded-lg bg-gray-300' placeholder='password'  value={password} onChange={(e)=>{setpassword(e.target.value)}} ></input>
       <button className='bg-[#37978B] p-2 text-lg font-medium rounded-lg'  onClick={Handler}>Submit</button>
       {/* <Link  className='p-10'to='/admin/addblog'>AddBlog</Link> */}
      </div>


{ref? <Navigate to='/admin/addblog'/>:''}

    </div>
  )
}

export default Admin;