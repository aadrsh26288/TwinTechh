import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Search } from 'react-bootstrap-icons';

function Hero() {
  return (
    <div className='relative'>

  
    <Container className=" " style={{'max-width':'100%' ,height:'100%',margin:'0',padding:'0' }}>
    
      <Carousel>
      <Carousel.Item interval={1000}>
      {/* <span aria-hidden="true" className="carousel-control-next-icon absolute p-3 rounded-xl  " style={{background:"#D9D9D9",color:'#37978B',top:'47%',left:'76px', padding:'4px'}} />
      <span aria-hidden="true" className="carousel-control-next-icon absolute p-3 rounded-xl  " style={{background:"#D9D9D9",color:'#37978B',top:'47%',right:'76px', padding:'4px'}} /> */}


      <img
          className="md:h-96  w-full" style={{height:'750px', width:'100%', objectFit: 'cover'}}
          src="https://source.unsplash.com/random?&h=1920&w=1080"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="d-inline-flex px-4 justify-content-center align-items-center rounded-pill border " style={{borderColor: '#6EADA6'}}><Search size={20} className="me-4 mb-1" /><h4 className="fst-italic">Find out what's new!</h4></div>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={500}>
      {/* <span aria-hidden="true" className="carousel-control-next-icon absolute p-3 rounded-xl  " style={{background:"#D9D9D9",color:'#37978B',top:'47%',left:'76px', padding:'4px'}} />
      <span aria-hidden="true" className="carousel-control-next-icon absolute p-3 rounded-xl  " style={{background:"#D9D9D9",color:'#37978B',top:'47%',right:'76px', padding:'4px'}} /> */}

      <img
          className="md:h-96  w-full " style={{height:'750px', width:'100vw', objectFit: 'cover'}}
          src="https://source.unsplash.com/random?&h=1921&w=1081"
          alt="First slide"
        />
        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      {/* <span aria-hidden="true" className="carousel-control-next-icon absolute p-3 rounded-xl hidden md:flex   " style={{background:"#D9D9D9",color:'#37978B',top:'47%',left:'76px', padding:'4px'}} />
      <span aria-hidden="true" className="carousel-control-next-icon absolute p-3 rounded-xl  " style={{background:"#D9D9D9",color:'#37978B',top:'47%',right:'76px', padding:'4px'}} /> */}


      <img
          className="md:h-96  w-full " style={{height:'750px', width:'100vw', objectFit: 'cover'}}
          src="https://source.unsplash.com/random?&h=1922&w=1082"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="d-inline-flex px-4 justify-content-center align-items-center rounded-pill border border-success" style={{borderColor: '#6EADA6'}}><Search size={20} className="me-4 mb-1" /><h4 className="fst-italic">Find out what's new!</h4></div>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
    
    </Container>
    </div>
  );
}

export default Hero;
