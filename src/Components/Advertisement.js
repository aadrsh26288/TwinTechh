import React , { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';
import{Link} from 'react-router-dom' 
AOS.init();


var imgShadow =  {
    backgroundColor: "#64b5f6",
    boxShadow: "12px 15px 8px #9E9E9E"
  }

function Advertisement() {

  useEffect(() => {
    AOS.init({
      duration : 5000
    });
    AOS.refresh();
  }, []);

  return (
    <>
    <div className="">
      <div>
        <Link to="/living" className="no-underline">

           <div data-aos={"fade-up"} className="mt-5 flex lg:flex-row flex-col ">
        <img src="https://source.unsplash.com/random?&h=500&w=800" style={{height:'500px', width:'800px', objectFit: 'cover'}} alt="AdImg" className="shadow-md shadow-gray-600"/>
        <div className=" flex flex-col justify-center md:items-end px-4 w-full" style={{background:'#D9D9D9'}}>
  
  
     <h1  className="md:text-4xl text-xl mt-3 text-black md:pl-20  pl-0">
            Living Solutions
          </h1>
          <h3 className="md:text-4xl text-xl" style={{  color: '#37978B' }}>
            Explore the Solutions
          </h3>
    
   
          <p className="md:ml-5 text-justify text-xl text-black text-semibold p-2 mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam exerc
            quod fugiat nulla explicabo rem. Ullam placeat, voluptatum, possimus
            omnis tempora ab facilis ipsum veniam voluptas, dignissimos repellat
            dolorem iste perferendis ex neque eaque consectetur! Aspernatur
            eaque id in nihil.
          </p>
          
        </div>
    
      </div>
      </Link>
      </div>
   


      <Link  to='/young' className="no-underline ">
      <div data-aos={"fade-up"} className="mt-5 flex lg:flex-row flex-col-reverse ">
        <div className=" flex flex-col justify-center md:items-start px-3 w-full " style={{background:'#D9D9D9'}}>
          <div className="mt-3 md:mt-0">
          <Link  to='/young' className="no-underline">
             <h1  className="md:text-4xl text-xl text-black">
            Young Solutions
          </h1>
          <h3 className="md:text-4xl text-xl" style={{  color: "#37978B" }}>
            Explore the Solutions
          </h3>
          </Link>
          </div>
         
          <p className=" text-black text-justify text-xl text-semibold p-2 mt-2 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam exerc
            quod fugiat nulla explicabo rem. Ullam placeat, voluptatum, possimus
            omnis tempora ab facilis ipsum veniam voluptas, dignissimos repellat
            dolorem iste perferendis ex neque eaque consectetur! Aspernatur
            eaque id in nihil.
          </p>
        </div>
        <img  src="https://source.unsplash.com/random?&h=500&w=800" style={{height:'500px', width:'800px', objectFit: 'cover'}} alt="AdImg" className="shadow-md shadow-gray-600" />
      </div>
      </Link>

      <div fluid data-aos={"fade-up"} className="mt-5 text-dark py-10" style={{backgroundColor: '#37978B'}} >
        <div className='px-3 d-flex flex-column align-items-center'>
            <h2 className="md:text-6xl text-3xl  text-center mt-1 text-white  " >Functionality and Design</h2>
            <h3 className="lg:text-2xl text-sm text-center text-white " >Discover all the characteristics of TwinTech environment</h3>
        </div>
      </div>
      <div className="my-5 d-flex justify-content-center align-items-center" data-aos={"fade-up"}>
        <img src="https://source.unsplash.com/random?&h=1450&w=1200"  alt="AdImg" className="rounded-5" style = {imgShadow}/>
      </div>
    </div>
    </>
  );
}

export default Advertisement;
