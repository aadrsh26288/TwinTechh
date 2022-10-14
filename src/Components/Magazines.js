import React, { useState, useEffect } from "react";
import { 
  Link
} from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Lib/initFirebase";
// import { Button } from "react-bootstrap";
import Pagination from "./Pagination";
import MagazinesCards from "./MagazinesCards";
// import { Link, useParams } from 'react-router-dom';



function Magazines() {

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ blogPerPage, setBlogPerPage ] = useState(5)
    const[newcategory,setNewCategory] = useState([])
    // const {id} =useParams();



  function getBlogs(){
        setLoading(true)
        const blogsCollectionRef = collection(db, "blogs")
        getDocs(blogsCollectionRef)
            .then( response => {
                const blogResponse = response.docs.map( doc => ({
                    data: doc.data(),
                    id: doc.id
                }))
                setBlogs(blogResponse)
                setNewCategory(blogResponse)
                setLoading(false)
            } )
            .catch( error => alert(error.message) )
    }

    useEffect(() => {
        getBlogs()
    }, []) 
    

console.log(blogs)


    const indexOfLastBlog = currentPage*blogPerPage
    const indexOfFirstBlog = indexOfLastBlog-blogPerPage
    const curretBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog)
    
    // Paginate Function
    const paginate = (pageNumber)=> setCurrentPage(pageNumber)


     function searchBlogOfType(searchType){
        const newItems = newcategory.filter((category)=>{
            return category.data.type===searchType
        })
        setBlogs(newItems)
    }

    return (
        <>
            <div className="mw-100 mx-0 lg:mx-5 md:mt-20">
                <div className="d-flex"><h2 className="mx-auto">Magazines</h2></ div>
                <div className="border-top border-bottom border-dark d-flex py-3">
                    <div className="mx-auto flex  lg:text-xl gap-3 justify-around   w-11/12 text-sm ">
                        <a as={Link} to="/blogs" onClick={()=>{setBlogs(newcategory)}} className="text-decoration-none link-dark hover:border-b-2 border-green-600 duration-100">All</a>
                        <a href= "#"onClick={()=>{searchBlogOfType('Solution')}} className="text-decoration-none link-dark hover:border-b-2 border-green-600 duration-100">Solution</a>
                        <a href="#" onClick={()=>{searchBlogOfType('Inspiration')}} className="text-decoration-none link-dark hover:border-b-2 border-green-600 duration-100">Inspiration</a>
                        <a href="#" onClick={()=>{searchBlogOfType('Project')}} className="text-decoration-none link-dark hover:border-b-2 border-green-600 duration-100" >Project</a>
                        <a href="#" onClick={()=>{searchBlogOfType('News')}} className="text-decoration-none link-dark hover:border-b-2 border-green-600 duration-100">News</a>
                        <a href="#" onClick={()=>{searchBlogOfType('Events')}} className="text-decoration-none link-dark hover:border-b-2 border-green-600 duration-100">Events</a>
                        <a href="#" onClick={()=>{searchBlogOfType('Press review')}} className="text-decoration-none link-dark hover:border-b-2 border-green-600 duration-100">Press</a>
                   </div>
                </div>
                
                <MagazinesCards blogs={curretBlogs} loading={loading}/>
                <Pagination blogsperPage={blogPerPage} totalBlogs={blogs.length} paginate={paginate} />
            </div>

        </>
    )
}

export default Magazines;