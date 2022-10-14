import React, { useState, useEffect } from 'react'
import {
    Link
} from "react-router-dom";
import { collection, getDocs, addDoc, deleteDoc, doc , updateDoc,getDoc} from "firebase/firestore";
import { db } from "../Lib/initFirebase";
import { Form, Button, Card, Alert, Spinner, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Magazines from './Magazines'
import {ImBooks} from 'react-icons/im'
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from "html-react-parser"
import {Container} from "react-bootstrap";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import fb from '../Lib/Storage'
const storageRef=fb.storage().ref()


const Products=()=>{
  const [ isLoading, setIsLoading] = useState(false)
  const [imgLoading, setImgLoading] = useState(false)
  const [loading, setLoading] = useState(true)
  const [ error, setError ] = useState("")
  const [ alert, setAlert ] = useState("")
  const [date, setDate] = useState('')
  const [ title, setTitle ] = useState("")
  const[cover, setCover ] = useState("")
  const [summary, setSummary ] = useState("")
  const [blogType, setBlogType] = useState('')
  const [ body, setBody ] = useState("")
  const [blogs, setBlogs] = useState([])
  const [price,setprice]= useState()
  const [ratting,setratting]=useState('')
  // const [summary, setSummary]

const [ProductId,setProductId] = useState()



const handleImgChange=(e)=>{
  if(e.target.files[0]){
      setCover(e.target.files[0])

  }

}



const updateBlog = (id, updatedBlog) => {
    const bookDoc = doc(db, "Products", id);
    return updateDoc(bookDoc, updatedBlog);
  };


  const newBlog={
  
    title: title,  
    datePosted:date,
    price: price ,
    img:cover,
    summary:summary,
    category:blogType,
    rate:ratting


  }


function HandleImageSubmit(e){
  setImgLoading(true)
  e.preventDefault()
  const uploadtask=storageRef.child('img/'+cover.name).put(cover)
  uploadtask.on(
 'state changed',
 snapshot=>{},
 error=>{
     console.log(error)
  

 },
 ()=>{
 storageRef.child('img/'+cover.name).getDownloadURL().then(url=>{
         console.log('img url',url)
         setCover(url)
         
     })
     setImgLoading(false)
   
 }
)

}






  const blogTypes = [ 'Table', 'Chair', 'Bed', 'Desk', 'Almirah','Sofa','Wooden-rack'];

async function handleSubmit (e) {
      e.preventDefault()
      const blogCollectionRef = collection(db, "Products")
      let today = new Date()
      let date2 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
      setDate(date2)
      setIsLoading(true)


  try {

    if (ProductId !== undefined && ProductId !== "") {
        await updateBlog(ProductId, newBlog);
          setAlert("Product Updated successfully")
          setProductId("");
          setTitle('')
          setBody('')
          setprice('')
          setSummary('')
          // setCover(cover)
          setBlogType('')

    }else{
          await addDoc(blogCollectionRef, { title: title,  datePosted:date, price: price ,img:cover,summary:summary,category:blogType,rate:ratting})
          setTitle('')
          setBody('')
          setSummary('')
          setprice('')
          setCover('')
          setBlogType('Select Product Category')
          setAlert("Product added successfully")
    }
     
        
          
      } catch (error) {
          setError("Failed to add",)
          console.error('myerr',error)
      }
      setIsLoading(false)
      getBlogs()
  }

  async function handleDelete(id) {
      setLoading(true)
      const blogRef = doc(db, "Products", id)
      await deleteDoc(blogRef)
      setLoading(false)
      getBlogs()
  }

  useEffect(() => {
      getBlogs()
  }, [])

  function getBlogs(){
      setLoading(true)
      const blogsCollectionRef = collection(db, "Products")
      getDocs(blogsCollectionRef)
          .then( response => {
              const blogResponse = response.docs.map( doc => ({
                  data: doc.data(),
                  id: doc.id
              }))
              setBlogs(blogResponse)
              setLoading(false)
          } )
          .catch( error => console.log(error.message) )
  }

  const getProducts = (id) => {
    const blogDoc = doc(db, "Products", id);
    return getDoc(blogDoc);
  };



const getProductHandler = (id) => {
  console.log("The ID of document to be edited: ", id);
  setProductId(id);
};



const editHandler = async () => {
    // setMessage("");
    try {
      const docSnap = await getProducts(ProductId);
      console.log(docSnap.data());
    //   console.log("the record is :", docSnap.data().cover);
      setTitle(docSnap.data().title);
      setSummary(docSnap.data().summary);
      setBlogType(docSnap.data().category);
      setratting(docSnap.data().rate) ;
      setprice( docSnap.data().price)
      setCover(docSnap.data().img)


    //   setCover(docSnap.data().img)
    } catch (err) {
    console.log('error',err)
    }
  };

  useEffect(() => {
    console.log("The id here is : ", ProductId);
    if (ProductId !== undefined && ProductId !== "") {
      editHandler();
    }
  }, [ProductId]);



  return (
  <div className="mt-10 ">
   <div  className="flex md:flex-row flex-col"> 

   <div className="md:w-64 md:h-screen border-2 md:mt-10   h-32 w-full flex  justify-center" style={{background:'#37978B'}}>
          <div className='flex md:flex-col mt-3 gap-6 md:gap-12 decoration-none  text-green-600'>
       <Link to='/admin/addblog' className=' text-black no-underline flex items-center justify-between md:text-xl text-lg gap-3'>Add Blogs</Link> 
       <Link to='/admin/products' className=' text-black  no-underline flex items-center justify-start md:text-xl text-lg gap-3'> Add Products</Link> 
       <Link to='/admin/users' className=' text-black no-underline flex  items-center justify-start md:text-xl text-lg gap-3'>Users</Link> 
       <Link to='/admin/CurrentUsers' className=' text-black  no-underline flex items-center justify-start  md:text-xl text-lg gap-3'>Current Users</Link> 
        
   </div>
       </div>


<div className=" w-full mt-3 ">

     <Card className='border-0 px-5 mt-10'>
              <Card.Body>
                  <h2 className="text-center mb-4">Add Product</h2>
                  {error && <Alert varient='danger' onClose={()=> setError(false)} dismissible>{ error }</Alert>}
                  {alert && <Alert varient='success' onClose={()=> setAlert(false)} dismissible>{ alert }</Alert>}
                
                  <Form onSubmit={ handleSubmit }>
                  
                      <Form.Group className="my-3 ml-3" id="title">
                          <Form.Label className='h5'>Product Name </Form.Label>
                          <Form.Control type="text" value={title} onChange={(event)=>{setTitle(event.target.value)}} required />
                      </Form.Group>

                          
                      <Form.Group className="my-3 ml-3" id="title">
                          <Form.Label className='h5'>Product Price </Form.Label>
                          <Form.Control type="number" value={price} onChange={(event)=>{setprice(event.target.value)}} required />
                      </Form.Group>
                      
                      
                      <Form.Group className='my-3 ml-3' id="body">
                      <Form.Label className='h5'>Product Category </Form.Label>
                          <Form.Select value={blogType} onChange={(e)=>setBlogType(e.target.value)} size='md'>
                              <option>Select Product Category</option>
                              {blogTypes.map((type, index)=>(
                                  <option key={index} value={type}>{type}</option>
                              ))}
                          </Form.Select>


                      </Form.Group>


                   <Form.Group className="my-3 ml-3" id="title">
                          <Form.Label className='h5'>Summary</Form.Label>
                          <Form.Control as="textarea" className='border-2 w-full h-52 outline-none p-3 ' placeholder="Summary...." type="text" value={summary} onChange={(event)=>{setSummary(event.target.value)}} required />
                      </Form.Group>


                      
              

           <Form.Group className="my-3 ml-3 " >
              <Form.Label className='h5'>Image</Form.Label>
              <div className='flex items-center  gap-1'>
                              <Form.Control  type='file' onChange={(e)=>{handleImgChange(e)}} style={{width:'50%'}} />
       <Button disabled={imgLoading} className='btn  px-4 border-0' onClick={HandleImageSubmit} type='submit' style={{ backgroundColor: "rgb(55, 151, 139)" }} >{(imgLoading)? <Spinner animation="border" variant="light" /> : "Upload"}</Button> 
              </div>


           </Form.Group>

           <Form.Group className="my-3 ml-3" id="title">
                          <Form.Label className='h5'>Rating </Form.Label>
                          <Form.Control type="number" maxLength="5"  value={ratting} onChange={(event)=>{setratting(event.target.value)}} required />
                      </Form.Group> 
                      


           
           


      <Button disabled={isLoading} className='btn ml-3 mt-3 border-0' type='submit' style={{ backgroundColor: "rgb(55, 151, 139)" }} >{(isLoading)? <Spinner animation="border" variant="light" /> : "Submit"}</Button>
                  </Form>
              </Card.Body>
          </Card>



          </div>
          </div>
          <div className="mx-5 my-5">
                <h2>Blogs List</h2>
                {(loading)
                    ? <div> Loading...</div>
                    :   
                        <>
                            <div className="my-5  ">
                                {/* <ul>
       
                                    {blogs.map(blog => <li key={blog.id}>
                                     
                                    <Link to={`/blog/${blog.id}`} className="link-info text-decoration-none" >{ blog.data.title } </Link> 
                                    <Button variant="link" onClick={()=> handleDelete(blog.id)} className="mx-2" >Delete</Button></li> )}
                                </ul> */}
                                <div className="flex border-b-2  lg:w-11/12 justify-between gap-3  rounded-xl pl-3">
                                  <div className="flex  justify-between w-full">
                                  <p className="text-xl font-semibold">Category</p>
                                  <p className="text-xl font-semibold mr-16">Name</p>
                                  </div>
                        <div className="flex justify-between w-full px-20">
                                 <p className="text-xl font-semibold ml-40">Delete</p>
                                 <p className="text-xl font-semibold mr-16 ">Update</p>
                        </div>
               


                                </div>
                               

                                {
                                    blogs.map((magazine)=>{
                                
                                        return(
                                            
                                            <div key={magazine.id} className="grid grid-cols-3 lg:w-11/12 gap-6 border-b-2 pl-4 justify-self-center content-center ">        
                                             <div>
                                             <p className='text-lg '>{magazine.data.category}</p>
                                             </div>
                                            
                                             <div>
                                             <Link to={`/products/${magazine.id}`} className="text-center" >{ magazine.data.title } </Link> 
                                             </div>

                                             <div className="flex gap-4">
                                             < Button variant="link" onClick={()=> handleDelete(magazine.id)} className="mx-2" >Delete</Button>
                                             < Button variant="link"  className="mx-2" onClick={()=>{getProductHandler(magazine.id)}} >Update</Button>

                                             </div>
                                             

                                            </div>

                                        )
                        
                                    })
                                }
                                
                            </div>
                        </>
                }
                <Button onClick={()=> getBlogs()} disabled={loading} className="btn btn-sm btn-light btn-outline-secondary" >{(loading)? <> <br /> <Spinner animation="border" variant="secondary" /></> : "Refresh"}</Button>
            </div>

      </div>
  )

}


export default Products
