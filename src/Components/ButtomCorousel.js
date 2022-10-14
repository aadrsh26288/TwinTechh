import React, {useState,useEffect} from "react";
import { Carousel, Container} from "react-bootstrap";
import AOS from "aos"
import 'aos/dist/aos.css'; 
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Lib/initFirebase";

AOS.init();

function ButtomCorousel() {

  
  useEffect(() => {
    AOS.init({
      duration : 4000
    });
    AOS.refresh();
  }, []);

const [blogs, setBlogs] = useState([])


  function getBlogs(){
    // setLoading(true)
    const blogsCollectionRef = collection(db, "blogs")
    getDocs(blogsCollectionRef)
        .then( response => {
            const blogResponse = response.docs.map( doc => ({
                data: doc.data(),
                id: doc.id
            }))
            setBlogs(blogResponse)
            // setLoading(false)
        } )
        .catch( error => console.log(error.message) )
}

useEffect(() => {
  getBlogs()
}, [])


  return (
    <div data-aos={"fade-up"}>
      <div className="d-flex">
        <div className="display-2 mx-auto">Magazine</div>
      </div>
      {/* <div className="p-5">
<Container className="md:h-96 h-auto w-full px-6  " >

                
     <Carousel >
      <Carousel.Item  >
        <img
          className="md:h-96  w-full h-40 " style={{height:'600px',}}
  src="https://source.unsplash.com/random/?productivity,snow"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
<img
  className="md:h-96  w-full" style={{height:'600px'}}
  src="https://source.unsplash.com/random/?productivity,blog"
  alt="Second slide"
/>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
<img
  className="md:h-32  w-full" style={{height:'600px'}}
  src="https://source.unsplash.com/random/?productivity,news"

  alt="Third slide"
/>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>

      </Carousel>
    </Container>
  
      </div> */}

<div className="p-3 slider">
       
          <Container  style={{width:'100%' ,height:'100%',padding:'0'}}>
             <Carousel> 
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 h-25"
              src="https://picsum.photos/300/200"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 h-50"
              src="https://picsum.photos/300/200"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-25"
              src="https://picsum.photos/300/200"
              alt="Third slide"
            /> 
          </Carousel.Item> 
          </Carousel>
          </Container>
      
      
      </div>





    </div>
  );
}

export default ButtomCorousel;




