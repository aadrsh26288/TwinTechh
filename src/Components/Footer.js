import React from 'react'
import '../index2.css'
import {FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPhone, FaLocationArrow, FaEnvelope} from 'react-icons/fa'
import{RiSendPlaneLine} from 'react-icons/ri'
import{Link} from 'react-router-dom'
function Footer() {
  return (
    <div className='p-4 ' style={{backgroundColor: '#37978B'}}>
        <hr />
        {/* <div className=' flex flex-col lg:flex-row'>
            <div className='flex-fill justify-content-center'>
                <div className="">
                    <h2>TwinTech</h2>
                    <div className='my-5' style={{width: "300px"}}>Lorem ipsum dolor  amet consectetur adipisicing elit.</div>
                    <div className="d-flex flex-row gap-2">
                        <div className='inline-block rounded-circle bg-dark d-flex justify-content-center align-items-center text-light' style={{height: '30px', width: '30px'}}><FaFacebook size={16} /></div>
                        <div className='inline-block rounded-circle bg-dark d-flex justify-content-center align-items-center text-light' style={{height: '30px', width: '30px'}}><FaInstagram size={16} /></div>
                        <div className='inline-block rounded-circle bg-dark d-flex justify-content-center align-items-center text-light' style={{height: '30px', width: '30px'}}><FaYoutube size={16} /></div>
                        <div className='inline-block rounded-circle bg-dark d-flex justify-content-center align-items-center text-light' style={{height: '30px', width: '30px'}}><FaTwitter size={16} /></div>
                        <div className='inline-block rounded-circle bg-dark d-flex justify-content-center align-items-center text-light' style={{height: '30px', width: '30px'}}><FaLinkedin size={16} /></div>
                    </div>
                </div>
            </div>

            <div className='flex-fill'>
                <div className='h2'>Any Queries?</div>
                <form action="#">
                    <div>
                        <div className='h5 m-0 p-0'>Full Name</div>
                        <input type="text"  className='m-0 p-0 underBorder'/>
                    </div>
                    
                    <div>
                        <div className='h5 m-0 mt-2 p-0'>Email</div>
                        <input type="text"  className='m-0 p-0 underBorder'/>
                    </div>
                    
                    <div>
                        <div className='h5 m-0 mt-2 p-0'>Your Query</div>
                        <input type="text" className='m-0 p-2 underBorder' placeholder='Start typing' />
                    </div>
                    <button type="submit" className='border-dark rounded px-5 py-1 mt-4 text-light border-2 text-black' style={{backgroundColor: '#37978B'}}>Submit</button>
                </form>
            </div>

            <div className='flex-fill mt-3 lg:mt-0 '>
                <div className='h2 '>Contact Us</div>
                <div>
                    <FaEnvelope />
                    <span className='ms-2'>youremail@gmail.com</span>
                </div>
                <div>
                    <FaPhone />
                    <span className='ms-2'>+91 896 896  1111</span>
                </div>
                <div>
                    <FaLocationArrow />
                    <span className='ms-2'>address</span>
                </div>

            </div>
        </div> */}

        <div className='flex justify-between md:flex-row flex-col md:px-4  ' >
            <div>
                <h3>TwinTech</h3>
                <p className='text-lg text-white'>Lorem ipsum dolor  amet consectetur adipisicing elit.Lorem ipsum<br></br> dolor  amet consectetur adipisicing elit.</p>
                <button className='text-lg  flex gap-1  items-center text-black'>Read more<RiSendPlaneLine className='mt-1 '/></button>
            </div>

            <div className='flex justify-between gap-16 md:mt-0 mt-10 '>
                <div className='text-xl text-white '>
                <h3 className='text-black'>About</h3>
                <p>Magazines</p>
                <p>Blogs</p>
                <p>Sign up</p>
                <p>Contact us</p>
                <p>Login</p>
                </div>

            <div>
                <h3>Tags</h3>
                <div className=" space-x-1 text-white">
           <Link to='/magazines' className='text-white'>   <p className="bg-gray-400 inline-block p-1 m-0 rounded-md">Magazines</p></Link>  
                <p className="bg-gray-400 inline-block p-1 m-1 rounded-md">Blogs</p>
                <p className="bg-gray-400 inline-block p-1 m-1 rounded-md">Sign up</p><br></br>
                <p className="bg-gray-400 inline-block p-1 rounded-md ">Contact</p>
                <p className="bg-gray-400 inline-block p-1 rounded-md ">Login</p>
                <p className="bg-gray-400 inline-block p-1 rounded-md">Living</p>
                <p className="bg-gray-400 inline-block p-1 rounded-md m-1">Young</p><br></br> 
                {/* <p className="bg-gray-400 inline-block p-1 rounded-md m-1">Discover</p><br></br>     */}


                </div>  
                <div className="mt-3">
                    <h3>Follow Us</h3>
                    <div className="flex gap-2 cursor-pointer">
                    <div className='inline-block rounded-circle bg-dark d-flex justify-content-center align-items-center text-light' style={{height: '30px', width: '30px'}}><FaFacebook size={16} /></div>
                        <div className='inline-block rounded-circle bg-dark d-flex justify-content-center align-items-center text-light' style={{height: '30px', width: '30px'}}><FaInstagram size={16} /></div>
                        <div className='inline-block rounded-circle bg-dark d-flex justify-content-center align-items-center text-light' style={{height: '30px', width: '30px'}}><FaYoutube size={16} /></div>
                        <div className='inline-block rounded-circle bg-dark d-flex justify-content-center align-items-center text-light' style={{height: '30px', width: '30px'}}><FaTwitter size={16} /></div>
                        <div className='inline-block rounded-circle bg-dark d-flex justify-content-center align-items-center text-light' style={{height: '30px', width: '30px'}}><FaLinkedin size={16} /></div>
                    </div>

                    </div>
 
            </div>
            
            </div>
         
            <div className="md:mt-0 my-3  ">
                <h3>Subscribe</h3>
                <div className="flex  ">
                <input type="text" placeholder='Email...' className='p-2 outline-none'/>
                <button className="bg-gray-400 px-3 py-2"><RiSendPlaneLine/></button>
                </div>


            </div>
        </div>
        <hr></hr>
        <div className="flex justify-between text-white p-1 text-lg">
            <p>Copyright  ©  2022  TwinTwech</p>
            <p>All Rights Reserved | Terms and Conditions | Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer