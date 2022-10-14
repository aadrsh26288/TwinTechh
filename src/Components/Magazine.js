import React, { useState, useEffect } from 'react'
import {
    Link,
    useParams
} from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Lib/initFirebase";
import parse from "html-react-parser"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Magazine = () => {

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

          <div className="border-2  py-5 mt-8 grid md:grid-cols-2 text-justify " >
            <div className='px-3 w-full'>
           <h1>Title: <br></br>{ blog.data.title } </h1>
            <p className='w-3/4 text-lg'><span className='font-semibold'>Body:</span> <br></br>{parse( blog.data.body )}  </p>
            {/* <img src='https://picsum.photos/720/400' className='w-50' alt='...' /> */}
           <p className='text-lg'><span className='font-semibold'>Summary:</span> <br></br>{blog.data.summary}</p>
            </div>
        <img src={blog.data.img} alt='banner'  style={{width:'620px',height:'400px'}}/>
          
            
          </div>
       <Link to="/magazines">Go Back</Link>
          </>
        }
      </>
    );
};

export default Magazine;