import React from 'react'
import { Carousel, Container } from "react-bootstrap";

const Young = () => {
  return (
    <div className="md:mt-16  ">
        <div style={{ background:'#D9D9D9'}} className='py-3'>
        <div>
            <h1 className="text-6xl font-semibold text-center">YOUNG SOLUTION</h1>
            <hr className="w-11/12 mx-auto"></hr>
        </div>
        <div className='ml-3'>
            <h3>ONE MORE ROOM</h3>
            <p className='text-xl' style={{color: '#37978B'}}>Clei multiplies space and above all the value of space</p>
        </div>
        <div className="pb-8">
        <Container className="md:h-96 h-40  " style={{'max-width':'100%' ,height:'100%'}}>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="md:h-96  w-full " style={{height:'600px'}}
          src="https://source.unsplash.com/random/?productivity,nature"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="d-inline-flex px-4 justify-content-center align-items-center  border-b-2" style={{borderColor: '#6EADA6'}}><h4 className="fst-italic">A home where play</h4></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="md:h-96  w-full" style={{height:'600px'}}
          src="https://source.unsplash.com/random/?productivity,sea"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3 className='border-b-2 inline-block border-green-600 italic'>A home where
          To chill out</h3>
        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="md:h-96  w-full" style={{height:'600px'}}
          src="https://source.unsplash.com/random/?productivity,blogs"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="d-inline-flex px-4 justify-content-center align-items-center border-b-2" style={{borderColor: '#6EADA6'}}><h4 className="fst-italic ">A home where Study</h4></div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
        </div>
        <div className="flex flex-col justify-center  items-center md:w-3/4 mt-4  gap-3 mx-auto">
            <h3 className>Young Environments</h3>
            <p className='text-xl text-center' style={{color: '#37978B'}}>Spaces for meeting, social relations and festivity which immediately afterwards 
             become a place dedicated to rest and intimacy.</p>
        </div>
        </div>
{/* Environment */}
        <div className=' mt-3 '>
            <div className='flex gap-1 md:flex-row flex-col'>
               <img src='https://picsum.photos/650/350' className='shadow-md shadow-gray-600' alt='...' style={{width:'550px',height:'400px'}} />

                <div className='mt-3 md:px-4 md:mr-4 w-full md:w-3/4'>
                <h3 className='md:border-b-2 ml-3 text-4xl ' style={{color:'#37978B',borderBottom: '2px solid #37978B'}}>Environments 1</h3>
                    <p className='text-lg text-justify px-3 mt-6 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio,</p>
                </div>
            </div>


            <div className='flex md:flex-row-reverse gap-4 flex-col'>               
            <img src='https://picsum.photos/650/350' className='mt-2 shadow-md shadow-gray-600 ' alt='...' style={{width:'550px',height:'400px'}}/>
                <div className='mt-3 md:px-4 md:mr-4 w-full md:w-3/4'>
                    <h3 className='border-b-2 ml-3 text-4xl border-black' style={{color:'#37978B',borderBottom:'2px solid #37978B'}}>Environments 2</h3>
                    <p className='text-lg text-justify px-3 mt-6 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio,</p>
                </div>
             </div>
        </div>

        <div className='mt-3 bg-gray-300'>
            <div className='flex gap-4 md:flex-row flex-col '>
               <img src='https://picsum.photos/650/350' className='shadow-md shadow-gray-600' alt='...' style={{width:'550px',height:'400px'}}/>
                <div className='mt-3 md:px-4 md:mr-4 w-full md:w-3/4'>
                    <h3 className='border-b-2 ml-3 text-4xl border-black' style={{color:'#37978B',borderBottom:'2px solid #37978B'}}>Environments 3</h3>
                    <p className='text-lg text-justify px-3 mt-6 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio,</p>
                </div>
            </div>


            <div className='flex md:flex-row-reverse gap-4 flex-col'>
            <img src='https://picsum.photos/650/350' className='mt-2 shadow-md shadow-gray-600' alt='...'style={{width:'550px',height:'400px'}} />
                <div className='mt-3 md:px-4 md:mr-4 w-full md:w-3/4'>
                    <h3 className='border-b-2 ml-3 text-4xl border-black' style={{color:'#37978B',borderBottom:'2px solid #37978B'}}>Environments 4</h3>
                    <p className='text-lg text-justify px-3 mt-6 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio,</p>
                </div>
            </div>
        </div>

        <div className='mt-3'>
            <div className='flex gap-4 md:flex-row flex-col '>
               <img src='https://picsum.photos/650/350' className='shadow-md shadow-gray-600' alt='...' style={{width:'550px',height:'400px'}}/>

                <div className='mt-3 md:px-4 md:mr-4 w-full md:w-3/4'>
                <h3 className='border-b-2 ml-3 text-4xl border-black' style={{color:'#37978B',borderBottom:'2px solid #37978B'}}>Environments 5</h3>
                    <p className='text-lg text-justify px-3 mt-6 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio,</p>
                </div>
            </div>


            <div className='flex md:flex-row-reverse gap-4 flex-col'> 
               <img src='https://picsum.photos/650/350' className='mt-2 shadow-md shadow-gray-600' alt='...'style={{width:'550px',height:'400px'}} />
                <div className='mt-3 md:px-4 md:mr-4 w-full md:w-3/4'>
                    <h3 className='border-b-2 ml-3 text-4xl border-black' style={{color:'#37978B',borderBottom:'2px solid #37978B'}}>Environments 6</h3>
                    <p className='text-lg text-justify px-3 mt-6 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio,</p>
                </div>
            </div>
        </div>


        <div className='bg-gray-300'>
            <div className='flex gap-4 md:flex-row flex-col mt-3'>
               <img src='https://picsum.photos/650/350' className='shadow-md shadow-gray-600' alt='...'style={{width:'550px',height:'400px'}} />

                <div className='mt-3 md:px-4 md:mr-4 w-full md:w-3/4'>
                <h3 className='border-b-2 ml-3 text-4xl border-black' style={{color:'#37978B',borderBottom:'2px solid #37978B'}}>Environments 7</h3>
                    <p className='text-lg text-justify px-3 mt-6 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio,</p>
                </div>
            </div>


            <div className='flex md:flex-row-reverse gap-4 flex-col'>               
              <img src='https://picsum.photos/650/350' className='mt-2 shadow-md shadow-gray-600' alt='...'style={{width:'550px',height:'400px'}} />
                <div className='mt-3 md:px-4 md:mr-4 w-full md:w-3/4 '>
                    <h3 className='border-b-2 ml-3 text-4xl border-black' style={{color:'#37978B',borderBottom:'2px solid #37978B'}}>Environments 8</h3>
                    <p className='text-lg text-justify px-3 mt-6 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio,</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Young