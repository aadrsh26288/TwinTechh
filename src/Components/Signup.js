import React, { useEffect, useState, useRef } from 'react'
import GoogleIcon from '../Img/icons8-google.svg'
import apple from '../Img/apple.svg'
import facebook from '../Img/facebook.svg'
import { Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import { db } from '../Lib/initFirebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'

import AOS from "aos";
import 'aos/dist/aos.css'; 
AOS.init();

var imgShadow =  {
    display: "inline-block",
    boxShadow: "8px 10px 20px 4px #9E9E9E"
}

function Signup() {

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const phoneRef = useRef()
    const ageRef = useRef()
    const genderRef = useRef()

    const [isAutherized, setIsAutherized] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    // const navigate = useNavigate()
    // const { signup } = useAuth()

    // const userCollectionRef = collection(db, "users")

    // useEffect(()=>{
    //     const getUsers = async()=>{
    //       const data = await getDocs(userCollectionRef)
    //     }
    //     getUsers()
    //   }, [])

    // useEffect(() => {
    //     AOS.init({
    //       duration : 2000
    //     });
    //     AOS.refresh();
    //   }, []);

    //   async function handleSubmit(e) {
    //     e.preventDefault()

    //     if(passwordRef.current.value !== confirmPasswordRef.current.value) {
    //         return setError('Password do not match')
    //     }

    //     try {
    //         setError('')
    //         setLoading(true)
    //         await signup(emailRef.current.value, passwordRef.current.value)
    //         setIsAutherized(true)
    //         navigate('/login')
    //     } catch (e) {
    //         setError('Failed to create an account')
    //         setIsAutherized(false)
    //     }

    //     console.log(error)

    //     if (isAutherized) {
    //         await addDoc(userCollectionRef, { email: emailRef.current.value, name: nameRef.current.value, age: ageRef.current.value, phone: phoneRef.current.value })
    //     }
    //     setLoading(false)
    // }
    
  return (
    <div className='flex justify-content-center align-items-center' style={{background:'#D9D9D9', paddingBottom : "2rem"}}>
        {/* {error && <Alert varient='danger'>{ error }</Alert>} */}
        <div className="mx-auto my-5 rounded p-5 " data-aos={"fade-up"} style={imgShadow}>
            <div className="d-flex"><h2 className='mx-auto'>Sign Up</h2></div>
            <div className='flex flex-col md:flex-row p-3 gap-4 '>
                <div className='d-flex flex-column'>
                    <div className='mt-2'><div>Name: </div><input type="name" className=' outline-none rounded-lg p-1 px-3' style={{border:'2px solid #29726A',background:'#D9D9D9'}} ref={nameRef} /></div>
                    <div className='mt-2'><div>Email: </div><input type="email" className=' outline-none rounded-lg p-1  px-3' style={{border:'2px solid #29726A',background:'#D9D9D9'}} ref={emailRef} /></div>
                    <div className='mt-2'><div>Password: </div><input type="password" className=' outline-none rounded-lg p-1  px-3' style={{border:'2px solid #29726A',background:'#D9D9D9'}} ref={passwordRef} /></div>
                    <div className='mt-2'><div>Confirm Password: </div><input type="password" className=' outline-none rounded-lg p-1  px-3' style={{border:'2px solid #29726A',background:'#D9D9D9'}} ref={confirmPasswordRef} /></div>
                    <button type="submit" style={{backgroundColor: '#37978B'}} className='border-dark rounded px-5 py-1 mt-4 text-light' disabled={loading}>Sign Up</button>
                    <Link to="/register/login" className='mx-auto mt-3 italic' style={{color:'#29726A'}}>Already have an account?</Link>
                </div>

                <div>
                    <div className='mt-2'><div>Phone number: </div><input type="name" className=' px-3 outline-none rounded-lg p-1' style={{border:'2px solid #29726A',background:'#D9D9D9'}} ref={phoneRef}/></div>
                    <div className='mt-2'><div>Age: </div><input type="number" className=' px-3 outline-none rounded-lg p-1' style={{border:'2px solid #29726A',background:'#D9D9D9'}} ref={ageRef}/></div>
                    <div className='mt-4'>
                        <div>Gender:</div>
                        <div className='d-flex gap-2 align-items-center justify-content-center'>
                            <div><input type="radio" name="male" id="male" value="male" ref={genderRef} /> Male</div>
                            <div><input type="radio" name="female" id="female" value="female" ref={genderRef} /> Female</div>
                            <div><input type="radio" name="others" id="others" value="others" ref={genderRef} /> Others</div>
                        </div>
                    </div>
                    <div className='mt-4 flex flex-col gap-3' >
                        <div className='flex'>
                            <img src={GoogleIcon} alt="Google Icon" style={{width: '24px'}} />
                            <span>&nbsp; Log in <span className="font-semibold">with google</span> </span>
                        </div>
                        <div className='flex'>
                            <img src={facebook} alt="Google Icon" style={{width: '24px'}} />
                            <span>&nbsp; Log in <span className="font-semibold">with facebook</span> </span>
                        </div>
                        <div className='flex'>
                            <img src={apple} alt="Google Icon" style={{width: '24px'}} />
                            <span>&nbsp; Log in <span className="font-semibold">with apple</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

// function Signup() {
//     return (
//         <h1>Sign Upp</h1>
//     )
// }

export default Signup