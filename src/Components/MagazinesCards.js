import React,{ useEffect} from 'react'
import MagazinesCard from './MagazinesCard'
import {IoIosArrowDropright} from 'react-icons/io'
import{Link} from 'react-router-dom'
import { Key } from 'react-bootstrap-icons';
import AOS from "aos"
import 'aos/dist/aos.css';
import parse from "html-react-parser"


function MagazinesCards({ blogs, loading }) {

    if(loading){
        return <div>Loading ...</div>
    }

    


    return (
        <div className="my-2 d-flex flex-column align-items-center overflow-hidden ">
        { blogs.map((props, index) => 
      
      <div data-aos={(props.alter)? "fade-right": "fade-left"} key={props.id} interval={2000} className={!(index%2)? "w-100 lg:flex-row flex flex-col  lg:bg-white bg-gray-50  mt-2 lg:mt-0 mx-3 rounded-xl " :  "w-100 flex lg:flex-row-reverse flex-col lg:bg-white bg-gray-300 mt-2 lg:mt-0 mx-3 rounded-xl"  }>
    
      {/* {console.log(props.id)} */}
          <div className="content lg:p-5 p-2  md:w-3/4  w-full">
      <div className={(props.alter)? "llg:flex justify-content-end" : "lg:flex justify-content-start"}><div className={(!props.alter)} style={{borderBottom: "2px solid black", width: "60%" }}>{props.data.type}: March 4, 2022</div></div>
          <h2 className="mt-3 text-green-600">{props.data.title}</h2>
          {/* <p className="mt-4 text-justify px-1" >{parse( props.data.body )}</p> */}
          <p className="mt-4 text-justify px-1" >{props.data.summary}</p>

          <h1></h1>
          <Link to={`/blogs/${props.id}`} className='no-underline'> <button className="bg-green-600 rounded-lg text-white p-2  hover:bg-green-700 hidden  text-lg lg:flex items-center justify-center mt-5 gap-1" style={{background:'#37978B'}}> Read More <IoIosArrowDropright className='text-white mt-1' size={25}/></button></Link> 
      </div>
      

      <img src={props.data.img} className='object-cover ' alt='...' style={{width:'500px' ,height:'500px'}}/>
   <Link to={`/blogs/${props.id}`} className='no-underline' >  <button className="bg-green-600 rounded-lg text-white p-2  hover:bg-green-700 lg:hidden  text-lg flex mx-auto px-4 mb-3 my-3  text-center gap-2 " style={{background:'#37978B'}}> Read More <IoIosArrowDropright className='text-white mt-1' size={24}/></button></Link> 

      
        </div>
      )}       

               
    </div>

       
       // </div>
     
        // </div>



    )
}

export default MagazinesCards