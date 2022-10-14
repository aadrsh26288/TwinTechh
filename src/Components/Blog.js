import React, { useState, useEffect,Component } from 'react'
import ReactPlayer from 'react-player'

import {
    Link,
    useParams
} from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Lib/initFirebase";
import parse from "html-react-parser"


const Blog = () => {

    let { blogId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [ blog, setBlog ] = useState([]);

    useEffect(() => {
      getBlogData()
    }, [])

    function getBlogData(){
        const blogsCollectionRef = collection(db, "blogs")
        getDocs(blogsCollectionRef)
          .then( response => {
              const blogResponse = response.docs.map( doc => ({
                  data: doc.data(),
                  id: doc.id
              }))
              const thisBlog = blogResponse.find((blog)=> {
                  return (blog.id === blogId)
              })
              setBlog(thisBlog)
            
              setIsLoading(false)
          } )
          .catch( error => console.log(error.message) )
    }
  
    return (
      <>
        {isLoading ? "Loading...": 
          <>
          <div className="my-20 md:grid grid-cols-2  flex flex-col-reverse justify-between text-justify gap-5 md:px-10 md:p-3">
            <div className='flex justify-center'>
                <img src={blog.data.img} alt="img" className="object-cover"  style={{width: '500px', height: '500px'}}/>
            </div>
            <div className='p-3 w-full '>
                <p className='text-xl font-semibold text-center '>{blog.data.type} : March 4, 2022</p>
                <p className='text-4xl font-semibold capitalize ' style={{color:'#37978B'}}>{blog.data.title}</p>
               <p className='text-xl'>{parse(blog.data.body) }</p>
               <p className='text-xl font-medium'>{blog.data.summary }</p>

            </div>
            
          </div>

           
          </>
        }

        <div>
           <p className='md:text-[40px]  text-[20px]  mx-auto  md:w-[1160px] text-center font-semibold capitalize ' style={{color:'#37978B',borderBottom:'2px solid #37978B'}}>A new way of living and Clei solutions for the Murphy Bed</p>
           <div className='text-xl my-10 md:p-12 p-4 bg-[#CDCDCD73]' >
            <p className='md:px-20 text-justify'>From 1900 to today, however, the way of living spaces has changed and, today
              as never before, it is constantly evolving. The new way of living adapts to 
               more versatile environments than in the past, where only thanks to a very 
                accurate design can every centimeter be exploited to the maximum, without 
                 sacrificing comfort and opting for original systems. </p>

              <p className='md:px-20 text-justify'>
                The ideal house is no longer a large house, but a flexible house, which breaks 
                 down the concept of separate rooms divided by functions, in favor of optimized, 
                  ynamic and interactive spaces: it is a transformable house, made up of areas 
                 hat change, adapting to needs and at different times of the day.
                 </p>
           </div>

           {/* <img src={blog.data.img} alt="img" className=''/> */}
           <img src='https://source.unsplash.com/random?' className='w-full h-[800px] object-cover my-10'/>

           <p className='md:text-[32px] text-[20px] text-center p-3'>Scenario 1 The Open House project shows Making Room Wahshington DC</p>

           <div className='text-xl my-10 md:p-12 p-4 bg-[#CDCDCD73]' >
            <p className='md:px-20 text-justify font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut quis iure.
              Aliquam ab dignissimos autem iusto soluta alias, aut vel laborum culpa doloremque doloribus,libero consectetur 
              exercitationem dicta aspernatur, deleniti eveniet ullam cumque. </p>

              <p className='md:px-20 text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut quis iure.
              Aliquam ab dignissimos autem iusto soluta alias, aut vel laborum culpa doloremque 
            doloribus,libero consectetur exercitationem dicta aspernatur, deleniti eveniet 
            ullam cumque.
                 </p>

                 
              <p className='md:px-20 text-justify font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut quis iure.
              Aliquam ab dignissimos autem iusto soluta alias, aut vel laborum culpa doloremque 
            doloribus,libero consectetur exercitationem dicta aspernatur, deleniti eveniet 
            ullam cumque.
                 </p>



                 <p className='md:px-20 text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut quis iure.
              Aliquam ab dignissimos autem iusto soluta alias, aut vel laborum culpa doloremque 
            doloribus,libero consectetur exercitationem dicta aspernatur, deleniti eveniet 
            ullam cumque.
                 </p>
           </div>

           <div className='flex flex-col lg:flex-row justify-between gap-5 my-5'>
            <img  src="https://source.unsplash.com/random? " alt="" className="w-full h-[663px] object-cover"  />

            <div className='flex flex-col   gap-4  items-center'>
            <img src="https://source.unsplash.com/random?" alt="" className="w-full h-[204px] object-cover" />
            <img src="https://source.unsplash.com/random?" alt="" className="w-full h-[204px] object-cover" />
            <img src="https://source.unsplash.com/random?" alt="" className="w-full h-[204px] object-cover" />  
            </div>
           </div>

           
           <p className='   md:text-[40px] mx-auto text-center font-semibold capitalize ' style={{color:'#37978B',borderBottom:'2px solid #37978B'}}>Clei foldaway beds: functionality and aesthetics</p>

           <div className='text-xl my-10 p-12 bg-[#CDCDCD73]' >
            <p className='md:px-20 text-justify font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut quis iure.
              Aliquam ab dignissimos autem iusto soluta alias, aut vel laborum culpa doloremque doloribus,libero consectetur 
              exercitationem dicta aspernatur, deleniti eveniet ullam cumque. </p>

              <p className='md:px-20 text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut quis iure.
              Aliquam ab dignissimos autem iusto soluta alias, aut vel laborum culpa doloremque 
            doloribus,libero consectetur exercitationem dicta aspernatur, deleniti eveniet 
            ullam cumque.
                 </p>

                 
              <p className='md:px-20 text-justify font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut quis iure.
              Aliquam ab dignissimos autem iusto soluta alias, aut vel laborum culpa doloremque 
            doloribus,libero consectetur exercitationem dicta aspernatur, deleniti eveniet 
            ullam cumque.
                 </p>



                 <p className='md:px-20 text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut quis iure.
              Aliquam ab dignissimos autem iusto soluta alias, aut vel laborum culpa doloremque 
            doloribus,libero consectetur exercitationem dicta aspernatur, deleniti eveniet 
            ullam cumque.
                 </p>
           </div>
    
           <ReactPlayer
          url='https://www.youtube.com/watch?v=-lPeEhq-AW4'
          className='react-player my-10'
          playing
          width='100%'
          height='700px'
          // className='py-5'
        />


        <p className='text-center md:mx-10 text-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut quis iure.
          Aliquam ab dignissimos autem iusto soluta alias, aut vel laborum culpa doloremque doloribus,
         libero consectetur exercitationem dicta aspernatur, deleniti eveniet 
         ullam cumque.</p>

         <p className='text-[40px]   mx-auto text-center my-5 font-semibold capitalize md:w-[680px] ' style={{color:'#37978B',borderBottom:'2px solid #37978B'}}>How was the Murphy Bed born?</p>


         <div className='text-xl my-10 p-12 bg-[#CDCDCD73]' >                     
         <p className='md:px-20 text-justify '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut quis iure.
              Aliquam ab dignissimos autem iusto soluta alias, aut vel laborum culpa doloremque 
            doloribus,libero consectetur exercitationem dicta aspernatur, deleniti eveniet 
            ullam cumque.
                 </p>



                 <p className='md:px-20 text-justify font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut quis iure.
              Aliquam ab dignissimos autem iusto soluta alias, aut vel laborum culpa doloremque 
            doloribus,libero consectetur exercitationem dicta aspernatur, deleniti eveniet 
            ullam cumque.
                 </p>
        </div>


        <div className="grid md:grid-cols-2 gap-4 text-[26px] p-4">
          <img src="https://source.unsplash.com/random?" alt="img" className='w-[672px] h-[572px] object-cover'/>
          <div className="mt-4"> 
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut quis iure.Aliquam ab dignissimos autem iusto soluta alias, 
              aut vel laborum culpa doloremque doloribus,libero consectetur exercitationem dicta aspernatur, deleniti eveniet ullam cumque.</p>

              <p className='font-medium text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut quis iure.Aliquam ab dignissimos autem iusto soluta alias.</p>
          </div>
        </div>
        <div className='text-xl my-10 p-12 bg-[#CDCDCD73]' >                     
         <p className='md:px-20 text-justify '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut quis iure.
              Aliquam ab dignissimos autem iusto soluta alias, aut vel laborum culpa doloremque 
            doloribus,libero consectetur exercitationem dicta aspernatur, deleniti eveniet 
            ullam cumque.
                 </p>



                 <p className='md:px-20 text-justify font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut quis iure.
              Aliquam ab dignissimos autem iusto soluta alias, aut vel laborum culpa doloremque 
            doloribus,libero consectetur exercitationem dicta aspernatur, deleniti eveniet 
            ullam cumque.
                 </p>
        </div>

        </div>
      </>
    );
};

export default Blog;