import React, { useEffect,useState } from 'react'
import GoogleIcon from '../Img/icons8-google.svg'
import { useAuth } from '../Context/AuthContext'
import{auth} from '../Lib/initFirebase'

import {
  Link
} from 'react-router-dom'
import AOS from "aos";
import 'aos/dist/aos.css'; 
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth';

AOS.init();

var imgShadow =  {
    display: "inline-block",
    width: '350px',
    boxShadow: "8px 10px 20px 4px #9E9E9E"
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { login}  = useAuth();

  const login=()=>{
    const user = signInWithEmailAndPassword(auth,email,password).then((res)=>{
      return res;
    }).then((data)=>{
      console.log(data)
      alert('login successful');
    }).catch((error)=>{
      console.log(error.message)
    })
    
    console.log(user)
  
  }
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await login(email, password);
  //     // navigate("/home");
  //     alert('succuessfull')
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };










  useEffect(() => {
    AOS.init({
      duration : 2000
    });
    AOS.refresh();
  }, []);

  return (
    <div className='d-flex ' style={{background:'#D9D9D9', paddingBottom : "2rem"}}>
        <div className="mx-auto my-2 mb-5  rounded p-5 d-flex flex-column align-items-center" data-aos={"fade-up"} style={imgShadow}>
            <div className="d-flex"><h2 className='mx-auto'>Log in</h2></div>
            <div className='mt-2'><div>Email: </div> <input className=' outline-none rounded-lg p-1' onChange={(e)=>{setEmail(e.target.value)}} style={{border:'2px solid #29726A',background:'#D9D9D9'}}/></div>
            {/* <div className='mt-2'><div>Phone number: </div><input type="phone" /></div> */}
            <div className='mt-2'><div>Password: </div>      <input  onChange={(e)=>{setPassword(e.target.value)}} className="rounded-lg p-1 outline-none" style={{border:'2px solid #29726A',background:'#D9D9D9'}}/></div>
            <div style={{width: '190px'}} className="mt-2"><input type="checkbox" className="checked:text-red-500 input[checkbox] " style={{background:'#6EADA6'}}/><span className='ml-1'>Remember Me</span></div>

            <div className='mt-3'>
                <div className='mb-2'><a href="/" className='text-decoration-none link-danger text-sm ml-3'>Forgot password or email</a></div>
                <button type="submit" style={{width: '190px', backgroundColor: '#29726A'}} className='border-dark rounded px-5 py-1 mt-0 text-light shadow-lg' onClick={login}>Log in</button>
            </div>

            {/* <hr /> */}
            <div className="flex items-center justify-center"><div className="h-4 text-red-600 border-b-2  w-20 pl-1" style={{borderBottom: '3px solid #6EADA6'}}></div> <span className="mt-2 px-1">or</span> <div className="h-4 text-red-600 border-b-2  w-20" style={{borderBottom: '3px solid #6EADA6'}}></div> </div>

            <div className='mx-auto mt-3'>
              <div className='d-flex justify-content-center'>
                <img src={GoogleIcon} alt="Google Icon" style={{width: '24px'}} />
                <span>&nbsp; Log in <span className='font-semibold'>with google</span> </span>
              </div>
              <div className='d-flex justify-content-center fst-italic mt-2'>
                <Link to="/register/signup" style={{ color: "#37978B" }}>Create Account</Link>  
              </div>
            </div>

        </div>
    </div>
  )
}

export default Login