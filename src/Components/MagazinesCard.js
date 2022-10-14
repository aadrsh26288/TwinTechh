// import React, {useEffect} from 'react'
// import { Button } from "react-bootstrap";
// import AOS from "aos"
// import 'aos/dist/aos.css'; 
// import {IoIosArrowDropright} from 'react-icons/io'
// import{Link} from 'react-router-dom'
// import { Key } from 'react-bootstrap-icons';

// AOS.init();

// function MagazinesCard({id,title,body,type,alter}) {
    
//     useEffect(() => {
//         AOS.init({
//           duration : 50000
//         });
//         AOS.refresh();
//       }, []);

//       // console.log(blogs);
   
//     return (
//         // <div data-aos={(props.alter)? "fade-right": "fade-left"} interval={2000} className={(props.alter)? "mw-100 d-flex" : "mw-100 d-flex flex-row-reverse border-2 border-green-300 " }>
  
//         //     <div className="content p-5 w-50 ">
//         //         <div className={(props.alter)? "d-flex justify-content-end" : "d-flex justify-content-start"}><div className={(!props.alter)? "d=flex justify-content-end" : ""} style={{borderBottom: "2px solid black", width: "60%" }}>{props.type}: March 4, 2022</div></div>
//         //         <h2 className="mt-3">{props.title}</h2>
//         //         <p className="mt-4" style={{}}>{props.body}</p>
//         //         <h1></h1>
//         //         <Button className="btn btn-success mt-5"> Read More </Button>
//         //     </div>
//         //     <img src='https://picsum.photos/720/400' className='w-50' alt='...' />
//         // </div>


//         <div data-aos={(alter)? "fade-right": "fade-left"} key={key} interval={2000} className={(alter)? "mw-100 lg:flex-row flex flex-col   lg:bg-white bg-gray-50  mt-2 lg:mt-0 mx-3 rounded-xl " :  "mw-100 flex lg:flex-row-reverse flex-col lg:bg-white bg-gray-300 mt-2 lg:mt-0 mx-3 rounded-xl"  }>
//         {/* <div className='grid'> */}
//       {/* {console.log(props.id)} */}
//           <div className="content lg:p-5 p-2 w-full ">
//           <div className={(alter)? "lg:flex justify-content-end" : "lg:flex justify-content-start"}><div className={(!alter)} style={{borderBottom: "2px solid black", width: "60%" }}>{type}: March 4, 2022</div></div>
//           <h2 className="mt-3 text-green-600">{title}</h2>
//           <p className="mt-4 text-justify" >{body}</p>
//           <h1></h1>
//           <Link to={`/magazines/${id}`} className='no-underline'> <button className="bg-green-600 rounded-lg text-white p-2  hover:bg-green-700 hidden  text-lg lg:flex items-center justify-center mt-5 gap-1"> Read More <IoIosArrowDropright className='text-white mt-1' size={25}/></button></Link> 
//       </div>
      
//       {/* <div className=""> */}
//       <img src='https://picsum.photos/720/400' className='' alt='...' />
//       <button className="bg-green-600 rounded-lg text-white p-2  hover:bg-green-700 lg:hidden  text-lg flex mx-auto px-4 mb-3 my-3  text-center gap-2 "> Read More <IoIosArrowDropright className='text-white mt-1' size={24}/></button>
//       {/* </div> */}
      
      
//         </div>







//     )
   
// }

// export default MagazinesCard;